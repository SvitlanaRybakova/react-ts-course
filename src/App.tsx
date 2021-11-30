import React from 'react';
import Card, { CardVariant } from "./components/Card";
import UserList from './components/UserList';
import {IUser} from './types/types'

const App: React.FC = () =>{

  const users: IUser[] =[
    {id: 1, name: 'Bob', email: 'bob@gmail.com', address:{city: 'Lund', street:  'Kallbyvagen 3C', zipcode: '225 67'}},
    {id: 2, name: 'Olga', email: 'olga@gmail.com', address:{city: 'Malmo', street:  'Lundvagen 35G', zipcode: '123 456'}}
  ]
  const handleClick = (num: number) => {
    console.log('clicked, set from child', num )
  }
  return (
    <div>
      <Card
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
        onClick={handleClick}
      >
        <button>Works</button>
      </Card>

      <UserList users={users}/>
    </div>
  );
}

export default App;
