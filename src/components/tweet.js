import React from "react";

import styled from '@emotion/styled';
import { breakpoints, colors, shadows } from "../utils/variables";

const StyledTweet = styled.a`
	flex:  0 0 400px;
	text-decoration: none;
	background: ${colors.white};
	font-size: 1.6rem;
	padding: 3rem 2rem;
	border-radius: 1.6rem;
	box-shadow: ${shadows.normal};
	color: inherit;
	transition: all .2s;

	@media(max-width: ${breakpoints.md}) {
		flex: 0 0 350px;
		padding: 2rem;

		&:not(:last-child) {
			margin-right: 2rem;
		}
	}

	@media(max-width: ${breakpoints.sm}) {
		flex: 0 0 300px;
	}

	&:hover,
	&:focus {
		box-shadow: 0 1.5rem 3rem rgba(0,0,0, .1);
	}

	.avatar {
		border-radius: 50%;
		margin-right: 1rem;
	}

	.meta {
		display: flex;
		align-items: center;
		margin-top: 3rem;
	}

	.name {
		margin-bottom: .5rem;
	}

	.role, 
	.name {
		font-weight: 600;
	}

	&:not(:last-child) {
		margin-right: 3rem;
	}
`

const Tweet = ({ name, avatar, role, org, text, twitterHandle, tweetId }) => (
  <StyledTweet
    href={`https://twitter.com/${twitterHandle}/status/${tweetId}`}
    target="_blank"
    rel="noreferrer"
  >
    <div>
      <div dangerouslySetInnerHTML={{ __html: text }} />
      <div className="meta">
        <img src={avatar} alt={name} width="48" height="48" className="avatar"/>
        <div>
          <div className="name">{name}</div>
          <p>
            {role} <span className="role" dangerouslySetInnerHTML={{ __html: org }} />
          </p>
        </div>
      </div>
    </div>
  </StyledTweet>
)

export default Tweet
