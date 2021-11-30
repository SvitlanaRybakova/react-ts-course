import axios from "axios";
import React, { useState, useEffect } from "react";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { IUser, ITodo } from "./types/types";
import List from './components/List'
import User from './components/User'
import TodoItem from "./components/TodoItem";

const App: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([])
  // ex
  // const user: IUser[] = [
  //   {
  //     id: 1,
  //     name: "Bob",
  //     email: "bob@gmail.com",
  //     address: { city: "Lund", street: "Kallbyvagen 3C", zipcode: "225 67" },
  //   },
  //   {
  //     id: 2,
  //     name: "Olga",
  //     email: "olga@gmail.com",
  //     address: { city: "Malmo", street: "Lundvagen 35G", zipcode: "123 456" },
  //   },
  // ];

  useEffect(() => {
    fetchUsers();
    fetchTodos();
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

   async function fetchTodos() {
     try {
       const response = await axios.get<ITodo[]>(
         "https://jsonplaceholder.typicode.com/todos?_limit=10"
       );
       setTodos(response.data);
     } catch (e) {
       console.log("The error has been occured", e);
     }
   }

  const handleClick = (num: number) => {
    console.log("clicked, set from child", num);
  };

  return (
    <div>
      <Card
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
        onClick={handleClick}
      >
        <button>Click</button>
      </Card>

      {/* <UserList users={users} /> */}
      {/* reusful generic component for users */}
      <List items={users} renderItem={(user: IUser) => <User user={user} />} />
      {/* reusful generic component for todos */}
      <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} />} />
    </div>
  );
};

export default App;
