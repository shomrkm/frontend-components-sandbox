import { useCallback, useState } from 'react';

import { Base } from '../types';

type Props<T extends Base> = {
  defaultData: T[];
  updateAttribute: keyof T['data'];
};

export const useBoardData = <T extends Base>({ defaultData, updateAttribute }: Props<T>) => {
  const [data, setData] = useState<T[]>(defaultData);

  const update = useCallback(
    (record: T, value: string) => {
      setData((prev) => {
        const updatedRecord = {
          ...record,
          data: {
            ...record.data,
            [updateAttribute]: value,
          },
        };
        const tempData = prev.filter((r) => r.id !== record.id);
        tempData.push(updatedRecord);
        return tempData;
      });
    },
    [updateAttribute]
  );

  const dataFilteredBy = (attribute: keyof T['data'], value: string) => {
    return data.filter((r) => getValue<T['data'], keyof T['data']>(r.data, attribute) === value);
  };

  const reset = useCallback(() => {
    setData(defaultData);
  }, [defaultData]);

  return {
    data,
    dataFilteredBy: dataFilteredBy,
    update,
    reset,
  };
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
