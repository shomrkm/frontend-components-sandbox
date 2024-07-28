import { css } from '@emotion/react';

import { useProductCardContext } from '../hooks/ProductCardContext';

const style = css`
  display: flex;
  flex-direction: column;
`;

export const ProductImage = () => {
  const { product } = useProductCardContext();
  return (
    <div css={style}>
      <img src={product.image} alt="" />
    </div>
  );
};
