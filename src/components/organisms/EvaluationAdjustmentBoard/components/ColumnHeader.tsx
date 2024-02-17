import styled from 'styled-components';

type Props = {
  col: string;
  count: number;
  ratio: number;
};

export const ColumnHeader = ({ col, count, ratio }: Props) => {
  return (
    <StyledWrapper>
      <div>{col}</div>
      <div>{count} 人</div>
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
  padding: 1rem;
  font-weight: bold;
  width: 260px;
`;

const StyledSpan = styled.span`
  color: #0075e3;
`;
