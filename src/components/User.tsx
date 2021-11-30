import React, {FC} from 'react'
import { IUser } from '../types/types'

interface UserItemProps{
  user: IUser;
}
const User: FC<UserItemProps> = ({user}) => {
  return (
    <div key={user.id}>
      {" "}
      {user.id} <strong>{user.name}</strong> lives in{" "}
      <strong>{user.address.city}</strong> city,
      <strong>{user.address.street}</strong> street and has the email{" "}
      <strong>{user.email}</strong>{" "}
    </div>
  );
}

export default User
