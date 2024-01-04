import React, { useCallback } from 'react';
import { Button, Cluster, Stack } from 'smarthr-ui';
import styled from 'styled-components';

type Props = {
  onReset: () => void;
  onUpdate: () => boolean;
};

export const DragBoardToolbar = ({ onUpdate, onReset }: Props) => {
  const handleUpdate = useCallback(() => {
    onUpdate();
    console.log('updated');
  }, [onUpdate]);

  const handleReset = useCallback(() => {
    onReset();
  }, [onReset]);

  return (
    <Cluster gap={2}>
      <StyledInfo justify="flex-start" align="center">
        <Stack gap={0}>
          <p>A: 7人 → 9人</p>
          <p>B: 2人 → 3人</p>
        </Stack>
      </StyledInfo>
      <StyledButtonDiv>
        <Cluster inline gap={1} align="center">
          <Button variant="primary" size="s" onClick={handleUpdate}>
            更新
          </Button>
          <Button size="s" onClick={handleReset}>
            元に戻す
          </Button>
        </Cluster>
      </StyledButtonDiv>
    </Cluster>
  );
};

const StyledInfo = styled(Cluster)`
  border: 1px solid #d6d3d0;
  border-radius: 0.5rem;
  padding: 1rem;
  flex-direction: column;
`;

const StyledButtonDiv = styled.div`
  display: flex;
  align-items: flex-start;
`;
