import React, { FC } from "react";
import { IUser } from "../types/types";
import User from "../components/User";
import { useNavigate } from "react-router-dom";

interface UserListProps {
  users: IUser[];
}

const UserList: FC<UserListProps> = ({ users }) => {
  const navigate = useNavigate();

  return (
    <div>
      {users.map((user) => (
        <User user={user} onClick={(user) => navigate("/users/" + user.id)} />
      ))}
    </div>
  );
};

export default UserList;
