import { css } from '@emotion/react';

import { useProductCardContext } from '../hooks/ProductCardContext';

const style = css`
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
`;

type Props = {
  currency?: string;
};

export const ProductPrice = ({ currency = 'JPY' }: Props) => {
  const { product } = useProductCardContext();
  return (
    <div css={style}>
      {new Intl.NumberFormat('ja-JP', {
        style: 'currency',
        currency,
      }).format(product.price)}
    </div>
  );
};
