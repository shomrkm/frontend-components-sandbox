import { DndContext, DragEndEvent } from '@dnd-kit/core';
import React from 'react';
import styled from 'styled-components';

import { Draggable } from './components/Draggable';
import { Droppable } from './components/Droppable';
import { useUserDragDrop } from './hooks/useUserDragDrop';
import { User } from './types';

type Props = {
  columns: string[];
};

export const DragBoard = ({ columns }: Props) => {
  const { users, updateUser } = useUserDragDrop({
    defaultUsers: [
      { id: 'aaa', data: { rank: 'A' } },
      { id: 'bbb', data: { rank: 'A' } },
    ],
  });

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    if (!over) return;
    updateUser(active.data.current as User, over.id as string);
  };

  const draggables = ({ users, col }: { users: User[]; col: string }) => {
    const draggables = users.filter((user) => user.data.rank === col);
    return draggables.length === 0 ? (
      <div>drop me</div>
    ) : (
      <StyledDraggableContainer>
        {draggables.map((user) => (
          <Draggable id={user.id} key={user.id} user={user}>
            {user.id}
          </Draggable>
        ))}
      </StyledDraggableContainer>
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <StyledDroppableContainer className="drop-container">
        {columns.map((col) => (
          <Droppable key={col} id={col}>
            <StyledDroppableZone>{draggables({ users, col })}</StyledDroppableZone>
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

const StyledDraggableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
