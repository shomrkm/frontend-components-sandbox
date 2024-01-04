import { useDroppable } from '@dnd-kit/core';
import React from 'react';
import styled from 'styled-components';

import { Base } from '../types';

import { Draggable } from './Draggable';

type Props<T> = {
  id: string;
  data: T[];
  children({ entry }: { entry: T }): React.ReactNode;
};

export const Droppable = <T extends Base>({ id, data, children }: Props<T>) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });
  const style = {
    border: isOver ? 'solid #00c4cc' : undefined,
    borderRadius: isOver ? '0.5rem' : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <StyledDroppableZone>
        {data.length === 0 ? (
          <StyledEmptyDiv>empty</StyledEmptyDiv>
        ) : (
          <StyledDraggableContainer>
            {data.map((record) => (
              <Draggable id={record.id} key={record.id} data={record}>
                {children({ entry: record })}
              </Draggable>
            ))}
          </StyledDraggableContainer>
        )}
      </StyledDroppableZone>
    </div>
  );
};

const StyledDroppableZone = styled.div`
  background-color: #f5f4f3;
  height: 500px;
  width: 300px;
  border-radius: 0.5rem;
  padding: 1rem;
`;

const StyledDraggableContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;

const StyledEmptyDiv = styled.div`
  text-align: center;
  color: gray;
`;
