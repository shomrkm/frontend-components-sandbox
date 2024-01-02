import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';
import styled from 'styled-components';

type Props<T extends Record<string, any>> = {
  id: string;
  data: T;
  children: React.ReactNode;
};

/**
 * ドロップ可能なアイテムを構成するコンポーネント
 */
export const Draggable = <T extends Record<string, unknown>>({ id, data, children }: Props<T>) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data, // ここでユーザ情報を保持させることで、ドロップされた時にそのユーザデータを参照できる
  });

  const style = {
    transform: CSS.Translate.toString(transform),
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
  width: 170px;
  padding: 1rem;
  overflow: hidden;
`;
