import React, {FC} from 'react'
import { IUser } from '../types/types'

interface UserItemProps{
  user: IUser;
}
const User: FC<UserItemProps> = ({user}) => {
  return (
    <div key={user.id} style={{border: "1px solid gray", padding: "20px"}}>
      <strong>{user.id}</strong>  {user.name} lives
      in{user.address.city} city,
      {user.address.street}street and has the email{" "}
     {user.email}
    </div>
  );
}

export default User
