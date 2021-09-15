import { Global, css } from '@emotion/core';
import { fontSizes, colors, grid, breakpoints, radiuses } from "../utils/variables"

import React from 'react';

const BaseStyles = () => (
	<Global
        styles={css`
          /* --------------------------------------------- */
          /* ----- Basic Setup ----- */
          /* --------------------------------------------- */

          *,
          *::before,
          *::after {
            margin: 0;
            padding: 0;
            box-sizing: inherit;
          }

          html {
            font-size: 62.5%;

            @media (max-width: ${breakpoints.md}) {
              font-size: 59.5%;
            }

            @media (max-width: ${breakpoints.sm}) {
              font-size: 54.5%;
            }

            @media (max-width: 310px) {
              font-size: 50%;
            }

            // Compatibility for blank pages with black background
            background-color: ${colors.white};
          }

          body {
            position: relative;
            font-size: ${fontSizes.default};
            color: ${colors.textPrimary};
            font-family: "ABCDiatype", sans-serif;
            background: ${colors.offWhite};
            line-height: 1.4;
            overflow-x: hidden;
            box-sizing: border-box;
          }

          .stream-left {
            position: absolute;
            height: 70vh;
            top: 10vh;
            left: -40vh;

            @media (max-width: ${breakpoints.md}) {
              display: none;
            }
          }

          section {
            padding: 8rem 0;

            @media (max-width: ${breakpoints.md}) {
              padding: 6rem 0;
            }
          }

          a {
            color: ${colors.link};
            transition: all .2s;

            &:hover,
            &:focus {
              color: ${colors.black};
              text-decoration: none;
            }
          }

          a,
          button {
            cursor: pointer;
            outline: none;
          }

          button,
          input {
            font-family: inherit;
            outline: none;
          }

          /* --------------------------------------------- */
          /* ----- Headlines and Paragraphs ----- */
          /* --------------------------------------------- */

          h1,
          h2,
          h3,
          h4 {
            line-height: 1.1;
          }

          h1 {
            font-size: 3.6rem;
            margin-bottom: 3rem;
            font-weight: 400;

            @media (max-width: ${breakpoints.xs}) {
              font-size: 2.8rem;
            }
          }

          h2 {
            font-size: ${fontSizes.large};
            margin-bottom: 1.2rem;
            text-align: center;

            &::after {
              content: "";
              display: block;
              height: 5px;
              width: 10rem;
              margin: 2.5rem auto 4rem;
              border-radius: 5px;
              background: ${colors.offWhite2};
            }
          }

          h3 {
            font-size: 2.1rem;
          }

          p {
            &:not(:last-child) {
              margin-bottom: 2rem;
            }
          }

          /* --------------------------------------------- */
          /* ----- Layout Helpers ----- */
          /* --------------------------------------------- */

          .row {
            margin: 0 auto;
            width: 90%;
            max-width: ${grid.maxWidth};

            @media (max-width: 310px) {
              width: 96%;
            }
          }

          /* --------------------------------------------- */
          /* ----- Buttons ----- */
          /* --------------------------------------------- */

          .btn {
            position: relative;
            display: inline-block;
            padding: 1rem 2.5rem;
            color: ${colors.black};
            text-decoration: none;
            border-radius: ${radiuses.normal};
            transition: all 0.2s ease-in;
            background: ${colors.brand};
            font-weight: 400;

            @media (max-width: ${breakpoints.sm}) {
              padding: 1rem 1.5rem;
              font-size: 1.3rem;
            }

            @media (max-width: 280px) {
              padding: 1rem 1.2rem;
              font-size: 1.2rem;
            }

            &:hover,
            &:focus {
              background: ${colors.brandHover};
              box-shadow: 0 0.1rem .2rem rgba(0, 0, 0, 0.1);
            }

            &:active {
              box-shadow: 0 0.3rem 0.7rem rgba(0, 0, 0, 0.25);
            }
          }
        `}
      />
)

export default BaseStyles