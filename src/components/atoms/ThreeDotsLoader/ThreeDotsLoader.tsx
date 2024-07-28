import { css, keyframes } from '@emotion/react';

const widthSize = {
  sm: css`
    width: 42px;
  `,
  md: css`
    width: 60px;
  `,
  lg: css`
    width: 78px;
  `,
};

const dotSizes = {
  sm: css`
    width: 10px;
    height: 10px;
    margin: 1px;
  `,
  md: css`
    width: 14px;
    height: 14px;
    margin: 2px;
  `,
  lg: css`
    width: 18px;
    height: 18px;
    margin: 3px;
  `,
};

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
`;

const dotsStyle = css`
  margin: 2px;
  background-color: #333;
  border-radius: 50%;

  animation-name: ${bounce};
  animation-duration: 1.4s;
  animation-iteration-count: infinite;

  :nth-child(1) {
    animation-delay: -0.32s;
  }
  :nth-child(2) {
    animation-delay: -0.16s;
  }
`;

export type Props = {
  size?: keyof typeof dotSizes;
};

export const ThreeDotsLoader = ({ size = 'md' }: Props) => {
  return (
    <div css={[style, widthSize[size]]}>
      <div css={[dotsStyle, dotSizes[size]]}></div>
      <div css={[dotsStyle, dotSizes[size]]}></div>
      <div css={[dotsStyle, dotSizes[size]]}></div>
    </div>
  );
};
