import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import { Base } from '../types';

import { DraggableItem } from './Draggable';

type Props<T> = {
  id: string;
  data: T[];
  children({ entry }: { entry: T }): React.ReactNode;
};

export const Droppables = <T extends Base>({ id, data, children }: Props<T>) => {
  return (
    <Droppable droppableId={id}>
      {(provided, snapshot) => (
        <StyledDroppableZone
          ref={provided.innerRef}
          isDragingOver={snapshot.isDraggingOver}
          {...provided.droppableProps}
        >
          {data.length === 0 ? (
            <StyledEmptyDiv>empty</StyledEmptyDiv>
          ) : (
            <StyledDraggableContainer>
              {data.map((record, index) => (
                <DraggableItem id={record.id} key={record.id} index={index}>
                  {children({ entry: record })}
                </DraggableItem>
              ))}
            </StyledDraggableContainer>
          )}
          {provided.placeholder}
        </StyledDroppableZone>
      )}
    </Droppable>
  );
};

const StyledDroppableZone = styled.div<{ isDragingOver: boolean }>`
  background-color: white;
  height: 500px;
  width: 240px;
  border-radius: 20px;
  border: ${(props) => props.isDragingOver && '2px solid #00c4cc'};
  padding: 1rem;
  overflow-y: auto;
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
