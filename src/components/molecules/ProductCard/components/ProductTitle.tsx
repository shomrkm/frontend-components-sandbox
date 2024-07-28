import { css } from '@emotion/react';

import { useProductCardContext } from '../hooks/ProductCardContext';

const style = css`
  display: flex;
  justify-content: center;
  font-size: 1rem;
`;

export const ProductTitle = () => {
  const { product } = useProductCardContext();
  return <div css={style}>{product.title}</div>;
};
