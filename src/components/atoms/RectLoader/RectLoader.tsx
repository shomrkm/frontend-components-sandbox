import { css, keyframes } from '@emotion/react';
import React from 'react';

const stretch = keyframes`
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
`;

const style = css`
  display: flex;
  justify-content: center;
  width: 50px;
  height: 40px;
  gap: 2px;
  & > div {
    background-color: #333;
    width: 6px;
    height: 100%;

    animation-name: ${stretch};
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
`;

const child2 = css`
  animation-delay: -1.1s;
`;
const child3 = css`
  animation-delay: -1s;
`;
const child4 = css`
  animation-delay: -0.9s;
`;
const child5 = css`
  animation-delay: -0.8s;
`;

export const RectLoader = () => {
  return (
    <div css={style}>
      <div></div>
      <div css={child2}></div>
      <div css={child3}></div>
      <div css={child4}></div>
      <div css={child5}></div>
    </div>
  );
};
