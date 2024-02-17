import React, { useCallback } from 'react';
import { DragDropContext, DropResult, OnDragEndResponder } from 'react-beautiful-dnd';
import { PageHeading } from 'smarthr-ui';
import styled from 'styled-components';

import { ColumnHeader } from './components/ColumnHeader';
import { CrewCard } from './components/CrewCard';
import { Droppables } from './components/Droppable';
import { EvaluationAjustmentToolbar } from './components/EvaluationAjustmentToolbar';
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

export const EvaluationAjustmentBoard = <T extends Base>({ column, users }: Props<T>) => {
  const { name: colName, values } = column;
  const { dataFilteredBy, update, reset, getCount, getRatio, getChangeLog } = useBoardData({
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
      <StyledPageHeading>評価調整</StyledPageHeading>
      <EvaluationAjustmentToolbar
        onUpdate={handleUpdate}
        onReset={reset}
        changeLog={getChangeLog(column)}
      />
      <DragDropContext onDragEnd={handleDragEnd}>
        <StyledDroppableContainer className="drop-container">
          {values.map((col) => (
            <StyledColumn key={col}>
              <ColumnHeader
                key={`head_${col}`}
                col={col}
                count={getCount(col)}
                ratio={getRatio(col)}
              />
              <Droppables key={col} id={col} data={dataFilteredBy(colName, col)}>
                {({ entry }) => <CrewCard crew={entry.crew} />}
              </Droppables>
            </StyledColumn>
          ))}
        </StyledDroppableContainer>
      </DragDropContext>
    </StyledWrapper>
  );
};

const StyledPageHeading = styled(PageHeading)`
  padding: 0 0.5rem 2rem 0;
`;

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
  padding: 0.5rem;
  overflow-y: auto;
`;
