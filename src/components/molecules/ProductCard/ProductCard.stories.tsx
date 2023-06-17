import type { Meta, StoryObj } from '@storybook/react';

import ProductCard from './ProductCard';
import { Product } from './types';

const meta = {
  title: 'Components/Molecules/ProductCard',
  component: ProductCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const product: Product = {
  id: 1,
  image: 'https://iili.io/H68O7yb.jpg',
  title: 'Coffee Cats',
  category: 'Ornament',
  rating: { stars: 4, reviews: 4 },
  price: 1234,
};

export const Default: Story = {
  args: {
    product: product,
    image: <ProductCard.Image />,
    info: (
      <ProductCard.Info>
        <ProductCard.Category />
        <ProductCard.Title />
        <ProductCard.Rating />
        <ProductCard.Price />
      </ProductCard.Info>
    ),
    action: (
      <ProductCard.Button onClick={(product) => console.log(`Add ${product}`)}>
        Add to cart
      </ProductCard.Button>
    ),
  },
};
