import './drag_board.css';
import { DndContext, DragEndEvent, UniqueIdentifier } from '@dnd-kit/core';
import React, { useState } from 'react';

import { Draggable } from './components/Draggable';
import { Droppable } from './components/Droppable';

const DraggableItem = () => <div className="draggable-item">Draggable Item</div>;

const DroppableZone = ({ children }: { children: React.ReactNode }) => (
  <div className="drop-zone">{children}</div>
);

export const DragBoard = () => {
  const container = ['A', 'B', 'C'];
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);

  const draggableMarkup = (
    <Draggable id="draggable">
      <DraggableItem />
    </Draggable>
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { over } = event;
    setParent(over ? over.id : null);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup : null}
      <div className="drop-container">
        {container.map((id) => (
          <Droppable key={id} id={id}>
            {parent === id ? (
              <DroppableZone>{draggableMarkup}</DroppableZone>
            ) : (
              <DroppableZone>drop here</DroppableZone>
            )}
          </Droppable>
        ))}
      </div>
    </DndContext>
  );
};
