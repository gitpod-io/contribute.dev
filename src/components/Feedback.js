import React from 'react'
import TweetEmbed from 'react-tweet-embed'
import styled from '@emotion/styled'
import { breakpoints, grid } from '../utils/variables'

const Tweets = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    padding: 3rem 0;

    @media(min-width: calc(${breakpoints.md} + 1px)) {
        padding-left: calc((100% - ${grid.maxWidth})/2);
    }
    
    & > div {
        &:first-of-type {
            @media(max-width: ${breakpoints.md}) {
                padding-left: 4rem;
            }
            @media(max-width: ${breakpoints.sm}) {
                padding-left: 1rem;
            }
        }
    }

    .tweet {
        max-width: 90%;

        &:not(:last-child) {
            margin-right: 3rem;
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
            </div>
            <Tweets>
                <TweetEmbed className="tweet" id='1115274432958930946' options={twitterOptions} />
                <TweetEmbed className="tweet" id='1167463499779338243' options={twitterOptions} />
                <TweetEmbed className="tweet" id='1130775701714558982' options={twitterOptions} />
                <TweetEmbed className="tweet" id='1167463499779338243' options={twitterOptions} />
                <TweetEmbed className="tweet" id='1130775701714558982' options={twitterOptions} />
            </Tweets>
        </section>
    )
}
export default Feedback