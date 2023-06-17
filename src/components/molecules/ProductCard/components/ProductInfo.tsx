import { css } from '@emotion/react';
import React, { ReactNode } from 'react';

const style = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export type Props = {
  children: ReactNode;
};

export const ProductInfo = ({ children }: Props) => {
  return <div css={style}>{children}</div>;
};
