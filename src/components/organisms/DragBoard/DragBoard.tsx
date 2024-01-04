import React, { useCallback } from 'react';
import { DragDropContext, DropResult, OnDragEndResponder } from 'react-beautiful-dnd';
import styled from 'styled-components';

import { ColumnHeader } from './components/ColumnHeader';
import { DragBoardToolbar } from './components/DragBoardToolbar';
import { Droppables } from './components/Droppable';
import { UserCard } from './components/UserCard';
import { useBoardData } from './hooks/useBoardData';
import { Base } from './types';

type Props<T extends Base> = {
  column: {
    name: keyof T['data'];
    values: string[];
  };
  users: T[];
  onUpdate: (data: T[]) => boolean;
};

export const DragBoard = <T extends Base>({ column, users }: Props<T>) => {
  const { name: colName, values } = column;
  const { dataFilteredBy, update, reset, ratio } = useBoardData({
    defaultData: users,
    updateAttribute: colName,
  });

  const handleUpdate = useCallback(() => {
    alert('saved');
    return true;
  }, []);

  const handleDragEnd: OnDragEndResponder = (result: DropResult) => {
    const { source, destination, draggableId } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    update(draggableId, destination.droppableId, destination.index);
  };

  return (
    <StyledWrapper>
      <h1>Drag Board</h1>
      <DragBoardToolbar onUpdate={handleUpdate} onReset={reset} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <StyledDroppableContainer className="drop-container">
          {values.map((col) => (
            <StyledColumn key={col}>
              <ColumnHeader key={`head_${col}`} col={col} ratio={ratio(col)} />
              <Droppables key={col} id={col} data={dataFilteredBy(colName, col)}>
                {({ entry }) => (
                  <UserCard name={entry.data.name as string} img={entry.data.img as string} />
                )}
              </Droppables>
            </StyledColumn>
          ))}
        </StyledDroppableContainer>
      </DragDropContext>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  margin: 2rem;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledDroppableContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
