import styled from 'styled-components';

import { User } from '../types';

type Props = {
  user: User;
};

export const UserCard = ({ user }: Props) => {
  return (
    <StyledDiv>
      <div>{user.data.name}</div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
