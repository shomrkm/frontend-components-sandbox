import { DndContext, DragEndEvent, UniqueIdentifier } from '@dnd-kit/core';
import React, { useState } from 'react';
import styled from 'styled-components';

import { Draggable } from './components/Draggable';
import { Droppable } from './components/Droppable';

const DroppableZone = ({ children }: { children: React.ReactNode }) => (
  <StyledDroppableZone className="drop-zone">{children}</StyledDroppableZone>
);

export const DragBoard = () => {
  const container = ['A', 'B', 'C'];
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);

  const draggableMarkup = <Draggable id="draggable">drag me</Draggable>;

  const handleDragEnd = (event: DragEndEvent) => {
    const { over } = event;
    setParent(over ? over.id : null);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup : null}
      <StyledDroppableContainer className="drop-container">
        {container.map((id) => (
          <Droppable key={id} id={id}>
            {parent === id ? (
              <DroppableZone>{draggableMarkup}</DroppableZone>
            ) : (
              <DroppableZone>drop here</DroppableZone>
            )}
          </Droppable>
        ))}
      </StyledDroppableContainer>
    </DndContext>
  );
};

const StyledDroppableContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledDroppableZone = styled.div`
  background-color: beige;
  height: 200px;
  width: 100px;
  border-radius: 1rem;
  padding: 1rem;
`;
