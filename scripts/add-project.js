const fs = require('fs');
const https = require('https');
const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const GITHUB_PROJECTS_JSON = 'src/data/github-projects.json';
const GITHUB_PROJECTS_JSON_PATH = path.join(__dirname, '..', GITHUB_PROJECTS_JSON);

(async () => {
  const argv = process.argv.slice(2);
  const { projects } = JSON.parse(await readFile(GITHUB_PROJECTS_JSON_PATH, 'utf-8'));

  if (argv.length !== 1) {
    console.log('Usage: yarn run add-project [REPOSITORY]');
    process.exit();
  }

  const repository = argv[0];
  const existing = projects.find(project => repository.toLowerCase().replace(/\/$/, '') === `https://github.com/${project.repoName}`.toLowerCase());
  if (existing) {
    console.log(`[SKIPPED] Repository already in ${GITHUB_PROJECTS_JSON}: ${JSON.stringify(existing, null, 4)}`);
    return;
  }

  try {
    if (!new URL(repository)) {
      throw new Error(`Invalid repository URL: ${repository}`);
    }

    const repoName = repository.split('/').slice(3, 5).join('/');
    const githubData = (await fetchGitHubAPI(`https://api.github.com/repos/${repoName}`));

    // Add project to the list.
    const project = {
      title: githubData.name,
      description: githubData.description,
      language: githubData.language,
      repoName,
      logo: 'TODO'
    };
    projects.push(project);

    // Sort projects by popularity.
    const githubStars = {};
    for (const p of projects) {
      const data = await fetchGitHubAPI(`https://api.github.com/repos/${p.repoName}`);
      if (typeof data.stargazers_count !== 'number') {
        throw new Error(`Could not fetch stars! repoName=${p.repoName}, stars=${JSON.stringify(data.stargazers_count)}`);
      }
      githubStars[data.full_name.toLowerCase()] = data.stargazers_count;
    }
    console.log(githubStars);
    projects.sort((a, b) => {
      const a_stars = githubStars[a.repoName.toLowerCase()];
      const b_stars = githubStars[b.repoName.toLowerCase()];
      if (a_stars > b_stars) return -1;
      if (a_stars < b_stars) return 1;
      return 0;
    });

    // Save new projects list.
    await writeFile(GITHUB_PROJECTS_JSON_PATH, JSON.stringify({ projects }, null, 4), 'utf-8');
    console.log(`[OK] Succesfully added new project: ${JSON.stringify(project, null, 4)}`);
  } catch (error) {
    console.error(`[FAIL] Could not add ${repository}!`);
    console.error(error);
    process.exitCode = -1;
  }
})();

function fetchGitHubAPI(url) {
  return new Promise((resolve, reject) => {
    const headers = {
      'User-Agent': 'contribute.dev'
    };
    if (process.env.GITHUB_PAT) {
      headers['Authorization'] = `token ${process.env.GITHUB_PAT}`;
    }
    https.get(url, { headers }, res => {
      res.setEncoding('utf8');
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const array = JSON.parse(data);
        const nextUrl = (res.headers.link||'').split(',').filter(l=>l.endsWith('rel="next"')).map(l=>l.split('>')[0].split('<')[1])[0];
        if (!nextUrl) {
          resolve(array);
          return;
        }
        fetchGitHubAPI(nextUrl).then(r => resolve(array.concat(r)));
      });
    }).on('error', reject);
  });
}
