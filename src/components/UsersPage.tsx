import React, {FC, useEffect, useState} from 'react'
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import { IUser } from "../types/types";
import List from "./List";
import User from './User'

const UserPage: FC = () => {
   const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();


   useEffect(() => {
     fetchUsers();
   }, []);

   async function fetchUsers() {
     try {
       const response = await axios.get<IUser[]>(
         "https://jsonplaceholder.typicode.com/users"
       );
       setUsers(response.data);
     } catch (e) {
       console.log("The error has been occured", e);
     }
   }
  return (
    <div>
      {/* reusful generic component for users */}
      <List
        items={users}
        renderItem={(user: IUser) => (
          <User
            onClick={(user) => navigate("/users/" + user.id)}
            user={user}
          />
        )}
      />
    </div>
  );
}

export default UserPage
