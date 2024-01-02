import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';
import styled from 'styled-components';

import { User } from '../types';

type Props = {
  id: string;
  user: User;
  children: React.ReactNode;
};

/**
 * ドロップ可能なアイテムを構成するコンポーネント
 */
export const Draggable = ({ id, user, children }: Props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: user, // ここでユーザ情報を保持させることで、ドロップされた時にそのユーザデータを参照できる
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    padding: '0',
    border: 'none',
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <StyledDraggable className="draggable-item">{children}</StyledDraggable>
    </div>
  );
};

const StyledDraggable = styled.div`
  background-color: lightseagreen;
  border-radius: 1rem;
  height: 50px;
  width: 80px;
  padding: 0.5rem;
`;
