import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';
import styled from 'styled-components';

type Props = {
  id: string;
  children: React.ReactNode;
};

export const Draggable = ({ id, children }: Props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
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
