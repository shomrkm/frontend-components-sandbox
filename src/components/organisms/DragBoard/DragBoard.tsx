import { DndContext, DragEndEvent } from '@dnd-kit/core';
import React from 'react';
import styled from 'styled-components';

import { Droppable } from './components/Droppable';
import { UserCard } from './components/UserCard';
import { useBoardData } from './hooks/useBoardData';
import { Base } from './types';

type Props<T extends Base> = {
  column: {
    name: keyof T['data'];
    values: string[];
  };
  users: T[];
};

export const DragBoard = <T extends Base>({ column, users }: Props<T>) => {
  const { name: colName, values } = column;
  const { dataFilteredBy: usersFilteredBy, update: updateUser } = useBoardData({
    defaultData: users,
    updateAttribute: colName,
  });

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    if (!over) return;
    updateUser(active.data.current as T, over.id as string);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <StyledDroppableContainer className="drop-container">
        {values.map((col) => (
          <Droppable key={col} id={col} data={usersFilteredBy(colName, col)}>
            {({ entry }) => <UserCard user={entry} />}
          </Droppable>
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
