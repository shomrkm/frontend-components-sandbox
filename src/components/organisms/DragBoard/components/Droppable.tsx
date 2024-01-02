import { useDroppable } from '@dnd-kit/core';
import React from 'react';

type Props = {
  id: string;
  children: React.ReactNode;
};

export const Droppable = ({ id, children }: Props) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};
