import React from "react"
import styled from "@emotion/styled"
import Tweet from "./tweet"
import BenHalpern from '../resources/ben-halpern.jpg';
import MrugeshMohapatra from '../resources/mrugesh-mohapatra.png';
import PhanAn from '../resources/phan-an.jpg';

const tweets = [
  {
    name: "Ben Halpern",
    avatar: BenHalpern,
    org: `<span>
          @forem
        </span>
        and
        <span>
          @ThePracticalDev
        </span>`,
    role: "Creator and Co-founder",
    text: `
      <p>GitPod is incredibly cool.</p>
      <p>In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.</p>
    `,
    twitterHandle: "bendhalpern",
    tweetId: "1115274432958930946",
  },
  {
    name: "Mrugesh Mohapatra",
    avatar: MrugeshMohapatra,
    org: `
      <span>
        @freeCodeCamp
      </span>
    `,
    role: "Technology & Community",
    text: `
      <p>
          Ya'all @gitpod is freaking amazing! We integrated it into our workflow for working on @freeCodeCamp's codebase and I am honestly loving it. 🔥🔥!
          <br />
          Go check it out on our repo https://github.com/freeCodeCamp/f... now!
        </p>
    `,
    twitterHandle: "raisedadead",
    tweetId: "1167463499779338243",
  },
  {
    name: "Phan An",
    avatar: PhanAn,
    org: `
      <span>
        @vuejs
      </span>
    `,
    role: "Core Team Member",
    text: `
      <p>
        Now it's much easier to contribute to Koel with the newly added support of @Gitpod
        online IDE. Clicking https://gitpod.io/#https://githu...
        will open a new editor right in your browser and prepare everything for development! Huge thanks to @meysholdt
        for the PR!
      </p>
    `,
    twitterHandle: "notphanan",
    tweetId: "1130775701714558982",
  },
]

const Tweets = styled.div`
    display: flex;
    overflow-x: auto;
    padding: 5rem 0;
`

const Feedback = () => {
  return (
    <section>
      <div className="row">
        <div>
          <h2>Community Feedback</h2>
          <p style={{ textAlign: "center" }}>
            This is how contributors, maintainers and community leaders
            perceived the one-click experience with Gitpod.
          </p>
        </div>
        <Tweets>
            {tweets.map((t) => (
              <Tweet {...t} key={t.name} />
            ))}
        </Tweets>
      </div>
    </section>
  )
}
export default Feedback
