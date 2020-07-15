import React from 'react'
import TweetEmbed from 'react-tweet-embed'
import styled from '@emotion/styled'
import { breakpoints, grid } from '../utils/variables'

const Tweets = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 3rem 0;

    @media(max-width: ${breakpoints.md}) {
        flex-direction: column;
    }

    .tweet {
        flex: 0 0 49%;
        @media(max-width: ${breakpoints.md}) {
            width: 100%;
        }
    } 
`

const Feedback = () => {
    const twitterOptions = { theme: 'light', cards: 'hidden', dnt: true, conversation: 'none' }
    return (
        <section>
            <div className="row">
                <div>
                    <h2>Community Feedback</h2>
                    <p style={{ textAlign: "center" }}>This is how contributors, maintainers and community leaders perceived the one-click experience with Gitpod.</p>
                </div>
                <Tweets>
                    <TweetEmbed className="tweet" id='1115274432958930946' options={twitterOptions} />
                    <TweetEmbed className="tweet" id='1167463499779338243' options={twitterOptions} />
                    <TweetEmbed className="tweet" id='1130775701714558982' options={twitterOptions} />
                </Tweets>
            </div>
        </section>
    )
}
export default Feedback