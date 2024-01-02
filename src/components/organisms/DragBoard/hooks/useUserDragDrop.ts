import { useCallback, useState } from 'react';

import { User } from '../types';

type Props = {
  defaultUsers: User[];
};

export const useUserDragDrop = ({ defaultUsers }: Props) => {
  const [users, setUsers] = useState(defaultUsers);

  const updateUser = useCallback((user: User, value: string) => {
    setUsers((prev) => {
      const updateUser = {
        ...user,
        data: {
          ...user.data,
          rank: value,
        },
      };
      const tempUsers = prev.filter((u) => u.id !== user.id);
      tempUsers.push(updateUser);
      return tempUsers;
    });
  }, []);

  const resetUsers = useCallback(() => {
    setUsers(defaultUsers);
  }, [defaultUsers]);

  return {
    users,
    updateUser,
    resetUsers,
  };
};
