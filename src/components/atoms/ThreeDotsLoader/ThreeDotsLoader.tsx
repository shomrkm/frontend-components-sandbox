import { css, keyframes } from '@emotion/react';
import React from 'react';

const bounce = keyframes`
   0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

const style = css`
  display: flex;
  justify-content: center;
  width: 60px;
  gap: 2px;
  & > div {
    margin: 1px;
    width: 16px;
    height: 16px;
    background-color: #333;
    border-radius: 50%;

    animation-name: ${bounce};
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
  }
`;

const bounce1 = css`
  animation-delay: -0.32s;
`;
const bounce2 = css`
  animation-delay: -0.16s;
`;

export const ThreeDotsLoader = () => {
  return (
    <div css={style}>
      <div css={bounce1}></div>
      <div css={bounce2}></div>
      <div></div>
    </div>
  );
};
