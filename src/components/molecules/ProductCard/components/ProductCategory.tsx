import { css } from '@emotion/react';

import { useProductCardContext } from '../hooks/ProductCardContext';

const style = css`
  font-size: 0.7rem;
  color: #757575;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
`;

export const ProductCategory = () => {
  const { product } = useProductCardContext();
  return <div css={style}>{product.category}</div>;
};
