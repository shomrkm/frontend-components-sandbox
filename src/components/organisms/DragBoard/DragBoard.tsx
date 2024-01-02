import { DndContext, DragEndEvent } from '@dnd-kit/core';
import React from 'react';
import styled from 'styled-components';

import { Droppable } from './components/Droppable';
import { useUserDragDrop } from './hooks/useUserDragDrop';
import { User } from './types';

type Props = {
  columns: string[];
  users: User[];
  groupBy: keyof User['data'];
};

export const DragBoard = ({ columns, users, groupBy }: Props) => {
  const { usersFilteredBy, updateUser } = useUserDragDrop({
    defaultUsers: users,
    updateAttribute: groupBy,
  });

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    if (!over) return;
    updateUser(active.data.current as User, over.id as string);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <StyledDroppableContainer className="drop-container">
        {columns.map((col) => (
          <Droppable key={col} id={col} users={usersFilteredBy(groupBy, col)} />
        ))}
      </StyledDroppableContainer>
    </DndContext>
  );
};

const StyledDroppableContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem;
`;
