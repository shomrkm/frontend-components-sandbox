import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

type Props = {
  id: string;
  index: number;
  children: React.ReactNode;
};

/**
 * ドロップ可能なアイテムを構成するコンポーネント
 */
export const DraggableItem = ({ id, index, children }: Props) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <StyledWrapper
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {children}
        </StyledWrapper>
      )}
    </Draggable>
  );
};

const StyledWrapper = styled.div<{ isDragging: boolean }>`
  border: ${(props) => (props.isDragging ? 'solid #0077c7' : 'solid white')};
`;
