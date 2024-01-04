import styled from 'styled-components';

type Props = {
  col: string;
  ratio: number;
};

export const ColumnHeader = ({ col, ratio }: Props) => {
  return (
    <StyledWrapper>
      <div>{col}</div>
      <div>
        (<StyledSpan>{`${Math.round(ratio * 100)} %`}</StyledSpan>)
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 1rem;
  font-weight: bold;
`;

const StyledSpan = styled.span`
  color: #e01e5a;
`;
