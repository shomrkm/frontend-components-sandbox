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
    <StyledWrapper>
      <DndContext onDragEnd={handleDragEnd}>
        <StyledDragWrapper>
          <StyledDroppableContainer className="drop-container">
            {values.map((col) => (
              <StyledColumn key={col}>
                <StyledHeaderColumn key={`head_${col}`}>{col}</StyledHeaderColumn>
                <Droppable key={col} id={col} data={usersFilteredBy(colName, col)}>
                  {({ entry }) => (
                    <UserCard name={entry.data?.name as string} img={entry.data?.img as string} />
                  )}
                </Droppable>
              </StyledColumn>
            ))}
          </StyledDroppableContainer>
        </StyledDragWrapper>
      </DndContext>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  border: 0.5px solid #706d65;
  padding: 2rem;
  margin: 2rem;
`;

const StyledDragWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledHeaderColumn = styled.div`
  width: 300px;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
`;

const StyledDroppableContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0 2rem;
`;
