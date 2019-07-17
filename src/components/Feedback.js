import React from 'react'
import TweetEmbed from 'react-tweet-embed'
import styled from '@emotion/styled'

const Tweets = styled.div`
    display: flex;
    overflow-x: scroll;
    margin-top: 4rem;

    .tweet {
        &:not(:last-child) {
            margin-right: 4rem;
        }
    }
`

const Feedback = () => {
    const twitterOptions = { theme: 'light', cards: 'hidden', dnt: true, conversation: 'none' }
    return (
        <section>
            <div className="row">
                <div className='outline-left'>
                    <h2>Community Feedback</h2>
                    <p>This is how contributors, maintainers and community leaders perceived the one-click experience with Gitpod.</p>
                </div>
            </div>
            <Tweets>
                    <TweetEmbed className="tweet" id='1130775701714558982' options={twitterOptions} />
                    <TweetEmbed className="tweet" id='1115274432958930946' options={twitterOptions} />
                    <TweetEmbed className="tweet" id='1130775701714558982' options={twitterOptions} />
                    <TweetEmbed className="tweet" id='1115274432958930946' options={twitterOptions} />
            </Tweets>
        </section>
    )
}
export default Feedback