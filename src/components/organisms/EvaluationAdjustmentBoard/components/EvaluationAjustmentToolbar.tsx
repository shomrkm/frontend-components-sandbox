import React, { useCallback } from 'react';
import { Button, Cluster, Stack, Text } from 'smarthr-ui';
import styled from 'styled-components';

import { ChangeLog } from '../hooks/useBoardData';

type Props = {
  onReset: () => void;
  onUpdate: () => boolean;
  changeLog: ChangeLog[];
};

export const EvaluationAjustmentToolbar = ({ onUpdate, onReset, changeLog }: Props) => {
  const handleUpdate = useCallback(() => {
    onUpdate();
    console.log('updated');
  }, [onUpdate]);

  const handleReset = useCallback(() => {
    onReset();
  }, [onReset]);

  return (
    <Cluster gap={2}>
      <StyledInfo justify="flex-start" align="flex-start">
        <Stack gap={0.25}>
          {changeLog.map((log) => (
            <StyledChangeLogText key={log.value} size="S" isChanged={log.previous !== log.current}>
              {log.current === log.previous
                ? `${log.value}: ${log.previous}名`
                : `${log.value}: ${log.previous}名 → ${log.current}名`}
            </StyledChangeLogText>
          ))}
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
  border-radius: 20px;
  background-color: white;
  padding: 1rem;
  flex-direction: column;
  width: 200px;
`;

const StyledButtonDiv = styled.div`
  display: flex;
  align-items: flex-start;
`;

const StyledChangeLogText = styled(Text)<{ isChanged: boolean }>`
  color: ${(props) => props.isChanged && '#0075e3'};
  font-weight: ${(props) => props.isChanged && 'bold'};
`;
