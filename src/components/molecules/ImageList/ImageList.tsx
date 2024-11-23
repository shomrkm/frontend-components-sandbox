import React, { FC } from 'react';
import './style.css';

type Props = {
  images: {
    id: number;
    src: string;
    alt: string;
  }[];
};

export const ImageList: FC<Props> = ({ images }) => {
  return (
    <div className="list">
      {images.map((image) => (
        <div key={image.id} className="item">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};
