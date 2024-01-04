import { useCallback, useState } from 'react';

import { Base } from '../types';

type Props<T extends Base> = {
  defaultData: T[];
  updateAttribute: keyof T['data'];
};

export const useBoardData = <T extends Base>({ defaultData, updateAttribute }: Props<T>) => {
  const [data, setData] = useState<T[]>(defaultData);

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
      return data.filter((r) => getValue<T['data'], keyof T['data']>(r.data, attribute) === value);
    },
    [data]
  );

  const reset = useCallback(() => {
    setData(defaultData);
  }, [defaultData]);

  const ratio = useCallback(
    (value: unknown) => {
      const count = data.filter(
        (r) => getValue<T['data'], keyof T['data']>(r.data, updateAttribute) === value
      ).length;
      return count / data.length;
    },
    [data, updateAttribute]
  );

  return {
    data,
    dataFilteredBy,
    update,
    reset,
    ratio,
  };
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
