import { useDroppable } from '@dnd-kit/core';
import React from 'react';
import styled from 'styled-components';

import { User } from '../types';

import { Draggable } from './Draggable';
import { UserCard } from './UserCard';

type Props = {
  id: string;
  users: User[];
};

export const Droppable = ({ id, users }: Props) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });
  const style = {
    // backgroundColor: isOver ? 'red' : undefined,
    border: isOver ? 'solid red' : undefined,
    borderRadius: isOver ? '1rem' : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <StyledDroppableZone>
        <Draggables users={users} />
      </StyledDroppableZone>
    </div>
  );
};

// 1つの列に格納する Draggable アイテム群
const Draggables = ({ users }: { users: User[] }) => {
  return users.length === 0 ? (
    <div>empty</div>
  ) : (
    <StyledDraggableContainer>
      {users.map((user) => (
        <Draggable id={user.id} key={user.id} data={user}>
          <UserCard user={user} />
        </Draggable>
      ))}
    </StyledDraggableContainer>
  );
};

const StyledDroppableZone = styled.div`
  background-color: beige;
  height: 500px;
  width: 200px;
  border-radius: 1rem;
  padding: 1rem;
`;

const StyledDraggableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
