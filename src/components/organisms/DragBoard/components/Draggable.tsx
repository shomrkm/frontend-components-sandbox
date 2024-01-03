import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';

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
      <div>{children}</div>
    </div>
  );
};
