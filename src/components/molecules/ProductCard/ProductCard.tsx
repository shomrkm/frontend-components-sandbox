import { css } from '@emotion/react';
import React, { ReactNode } from 'react';

import { ProductButton } from './components/ProductButton';
import { ProductCategory } from './components/ProductCategory';
import { ProductImage } from './components/ProductImage';
import { ProductInfo } from './components/ProductInfo';
import { ProductPrice } from './components/ProductPrice';
import { ProductRating } from './components/ProductRating';
import { ProductTitle } from './components/ProductTitle';
import { ProductCardContext } from './hooks/ProductCardContext';
import { Product } from './types';

const cardStyle = css`
  width: 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: white;
  border: 1px solid grey;
`;

const bottomStyle = css`
  box-shadow: 0px -5px 10px 0px rgb(0 0 0 / 25%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

type Props = {
  product: Product;
  image?: ReactNode;
  info?: ReactNode;
  action?: ReactNode;
};

function ProductCard({ product, image, info, action }: Props) {
  return (
    <ProductCardContext.Provider value={{ product }}>
      <div css={cardStyle}>
        {image}
        <div css={bottomStyle}>
          {info}
          {action}
        </div>
      </div>
    </ProductCardContext.Provider>
  );
}

ProductCard.Image = ProductImage;
ProductCard.Button = ProductButton;
ProductCard.Title = ProductTitle;
ProductCard.Info = ProductInfo;
ProductCard.Category = ProductCategory;
ProductCard.Rating = ProductRating;
ProductCard.Price = ProductPrice;

export default ProductCard;
