import React, { useCallback } from 'react';
import { Button, Cluster, Stack, Text } from 'smarthr-ui';
import styled from 'styled-components';

import { ChangeLog } from '../hooks/useBoardData';

type Props = {
  onReset: () => void;
  onUpdate: () => boolean;
  changeLog: ChangeLog[];
};

export const DragBoardToolbar = ({ onUpdate, onReset, changeLog }: Props) => {
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
            <StyledChangeLogText
              key={log.value}
              isChanged={log.previous !== log.current}
            >{`${log.value}: ${log.previous} → ${log.current}`}</StyledChangeLogText>
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
  border-radius: 4px;
  padding: 1rem;
  flex-direction: column;
  width: 200px;
`;

const StyledButtonDiv = styled.div`
  display: flex;
  align-items: flex-start;
`;

const StyledChangeLogText = styled(Text)<{ isChanged: boolean }>`
  color: ${(props) => props.isChanged && '#e01e5a'};
  font-weight: ${(props) => props.isChanged && 'bold'};
`;
