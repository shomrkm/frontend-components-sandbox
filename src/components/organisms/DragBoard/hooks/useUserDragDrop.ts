import { useCallback, useState } from 'react';

import { User } from '../types';

type Props = {
  defaultUsers: User[];
  updateAttribute: string;
};

export const useUserDragDrop = ({ defaultUsers, updateAttribute }: Props) => {
  const [users, setUsers] = useState(defaultUsers);

  const updateUser = useCallback(
    (user: User, value: string) => {
      setUsers((prev) => {
        const updateUser = {
          ...user,
          data: {
            ...user.data,
            [updateAttribute]: value,
          },
        };
        const tempUsers = prev.filter((u) => u.id !== user.id);
        tempUsers.push(updateUser);
        return tempUsers;
      });
    },
    [updateAttribute]
  );

  const usersFilteredBy = (attribute: keyof User['data'], value: string) => {
    return users.filter((user) => getUserData(user.data, attribute) === value);
  };

  const resetUsers = useCallback(() => {
    setUsers(defaultUsers);
  }, [defaultUsers]);

  return {
    users,
    usersFilteredBy,
    updateUser,
    resetUsers,
  };
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const getUserData = getValue<User['data'], keyof User['data']>;
