import { css } from '@emotion/react';
import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { useProductCardContext } from '../hooks/ProductCardContext';

const style = css`
  display: flex;
  justify-content: center;
  color: #dbbc57;
  font-size: 1.1rem;
`;

export const ProductRating = () => {
  const { product } = useProductCardContext();
  return (
    <div css={style}>
      {[1, 2, 3, 4, 5].map((i) =>
        i <= product.rating.stars ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
      )}
    </div>
  );
};
