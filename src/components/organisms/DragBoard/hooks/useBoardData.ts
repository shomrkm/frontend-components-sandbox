import { useCallback, useState } from 'react';

import { Base } from '../types';

export type ChangeLog = {
  value: string;
  previous: number;
  current: number;
};

type Props<T extends Base> = {
  defaultData: T[];
  updateAttribute: keyof T['data'];
};

export const useBoardData = <T extends Base>({ defaultData, updateAttribute }: Props<T>) => {
  const [data, setData] = useState<T[]>(defaultData);

  const getValue = getValueT<T['data'], keyof T['data']>;

  const update = useCallback(
    (id: string, value: string, index: number) => {
      setData((prev) => {
        const prevRecord = prev.find((r) => r.id === id);
        if (!prevRecord) return prev;

        const updatedRecord = {
          ...prevRecord,
          data: {
            ...prevRecord.data,
            [updateAttribute]: value,
          },
        };
        const tempData = prev.filter((r) => r.id !== id);
        tempData.splice(index, 0, updatedRecord);
        return tempData;
      });
    },
    [updateAttribute]
  );

  const dataFilteredBy = useCallback(
    (attribute: keyof T['data'], value: string) => {
      return data.filter((r) => getValue(r.data, attribute) === value);
    },
    [data, getValue]
  );

  const reset = useCallback(() => {
    setData(defaultData);
  }, [defaultData]);

  const getCount = useCallback(
    (value: unknown) => {
      return data.filter((r) => getValue(r.data, updateAttribute) === value).length;
    },
    [data, updateAttribute, getValue]
  );

  const getRatio = useCallback(
    (value: unknown) => {
      const count = data.filter((r) => getValue(r.data, updateAttribute) === value).length;
      return count / data.length;
    },
    [data, updateAttribute, getValue]
  );

  const getChangeLog = useCallback(
    (columns: { name: keyof T['data']; values: string[] }): ChangeLog[] => {
      return columns.values.map((value) => {
        const prevs = defaultData.filter((r) => getValue(r.data, updateAttribute) === value);
        const currents = data.filter((r) => getValue(r.data, updateAttribute) === value);
        return {
          value,
          previous: prevs.length,
          current: currents.length,
        };
      });
    },
    [defaultData, data, updateAttribute, getValue]
  );

  return {
    data,
    dataFilteredBy,
    update,
    reset,
    getCount,
    getRatio,
    getChangeLog,
  };
};

function getValueT<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
