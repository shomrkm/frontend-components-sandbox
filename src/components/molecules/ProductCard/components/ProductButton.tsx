import { css } from '@emotion/react';
import { ReactNode } from 'react';

import { useProductCardContext } from '../hooks/ProductCardContext';
import { Product } from '../types';

const style = css`
  width: 100%;
  border: none;
  background: #80af70;
  color: white;
  height: 2.5rem;
  text-transform: uppercase;
  cursor: pointer;
`;

type Props = {
  children: ReactNode;
  onClick: (product: Product) => void;
};

export const ProductButton = ({ children, onClick }: Props) => {
  const { product } = useProductCardContext();

  const handleClick = () => {
    onClick(product);
  };

  return (
    <button css={style} type="button" onClick={handleClick}>
      {children}
    </button>
  );
};
