import axios from "axios";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

import Card, { CardVariant } from "./components/Card";
// import UserList from "./components/UserList";
import { IUser, ITodo } from "./types/types";
import List from "./components/List";

import TodoItem from "./components/TodoItem";
import EventExample from "./components/EventsExample";
import UsersPage from './components/UsersPage'
import UserItemPage from './pages/UserItemPage'

const App: React.FC = () => {
 
  const [todos, setTodos] = useState<ITodo[]>([]);
  
  

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

      {/* reusful generic component for todos */}
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} />}
      />
      <EventExample />
    
      <div>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/todos">Todos</NavLink>
      </div>

      <div>
        <Routes>
          <Route path="/users" element={<UsersPage />} />

          <Route path="/users/:id" element={<UserItemPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
