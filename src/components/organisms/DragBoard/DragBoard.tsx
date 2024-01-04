import { DndContext, DragEndEvent } from '@dnd-kit/core';
import React, { useCallback } from 'react';
import { Button } from 'smarthr-ui';
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
  onUpdate: (data: T[]) => boolean;
};

export const DragBoard = <T extends Base>({ column, users, onUpdate }: Props<T>) => {
  const { name: colName, values } = column;
  const { data, dataFilteredBy, update, reset } = useBoardData({
    defaultData: users,
    updateAttribute: colName,
  });

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    if (!over) return;
    update(active.data.current as T, over.id as string);
  };

  const handleUpdate = useCallback(() => {
    onUpdate(data);
  }, [data, onUpdate]);

  return (
    <>
      <Button variant="primary" size="s" onClick={handleUpdate}>
        更新
      </Button>
      <Button size="s" onClick={reset}>
        元に戻す
      </Button>
      <DndContext onDragEnd={handleDragEnd}>
        <StyledDragWrapper>
          <StyledDroppableContainer className="drop-container">
            {values.map((col) => (
              <StyledColumn key={col}>
                <StyledHeaderColumn key={`head_${col}`}>{col}</StyledHeaderColumn>
                <Droppable key={col} id={col} data={dataFilteredBy(colName, col)}>
                  {({ entry }) => (
                    <UserCard name={entry.data.name as string} img={entry.data.img as string} />
                  )}
                </Droppable>
              </StyledColumn>
            ))}
          </StyledDroppableContainer>
        </StyledDragWrapper>
      </DndContext>
    </>
  );
};

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
