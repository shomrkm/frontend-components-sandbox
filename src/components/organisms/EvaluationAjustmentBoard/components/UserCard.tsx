import styled from 'styled-components';

import { Evaluation } from '../types';

type Props = {
  crew: Evaluation['crew'];
};

export const UserCard = ({ crew }: Props) => {
  const fullName = `${crew.lastName} ${crew.firstName}`;
  return (
    <StyledDiv>
      <StyledImg src={crew.profile} alt={fullName} />
      <StyledName>{fullName}</StyledName>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #23221e;
  border-radius: 10px;
  border: 1px solid #d6d3d0;
  box-shadow: 1px 1px 1px #d6d3d0;
  overflow: hidden;
  height: 135px;
  width: 100px;
`;

const StyledImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  object-position: center;
`;

const StyledName = styled.p`
  font-size: 0.8rem;
  text-align: center;
  margin: 0;
  padding: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
`;
