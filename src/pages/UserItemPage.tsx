import React, { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

interface UserItemPageParams {
  id: string;
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  // const params = useParams<UserItemPageParams>();
  // const  params = useParams<UserItemPageParams>();
  const { params }: any = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(response.data);
      console.log(user);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <button onClick={() => navigation("/users")}>Back</button>
      <h1>The user page {user?.name}</h1>
      <div>{user?.email}</div>
      <div>
        {user?.address.city} {user?.address.street} {user?.address.zipcode}
      </div>
    </div>
  );
};

export default UserItemPage;
