import React, { FC } from "react";
import { IUser } from "../types/types";
import User from './User';

interface UserListProps {
  users: IUser[];
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
       <User user={user}/>
      ))}
    </div>
  );
};

export default UserList;
