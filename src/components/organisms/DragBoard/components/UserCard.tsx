import styled from 'styled-components';

type Props = {
  name: string;
  img: string;
};

export const UserCard = ({ name, img }: Props) => {
  return (
    <StyledDiv>
      <StyledImg src={img} alt={name} />
      <StyledName>{name}</StyledName>
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
`;
