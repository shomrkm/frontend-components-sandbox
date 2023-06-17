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
`;

const rectStyle = css`
  background-color: #333;
  width: 6px;
  height: 100%;

  animation-name: ${stretch};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  &:nth-child(2) {
    animation-delay: -1.1s;
  }
  &:nth-child(3) {
    animation-delay: -1s;
  }
  &:nth-child(4) {
    animation-delay: -0.9s;
  }
  &:nth-child(5) {
    animation-delay: -0.8s;
  }
`;

export const RectLoader = () => {
  return (
    <div css={style}>
      <div></div>
      <div css={rectStyle}></div>
      <div css={rectStyle}></div>
      <div css={rectStyle}></div>
      <div css={rectStyle}></div>
    </div>
  );
};
