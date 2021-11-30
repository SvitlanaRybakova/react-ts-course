import React from 'react';
import Card, { CardVariant } from "./components/Card";

const App: React.FC = () =>{

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
    </div>
  );
}

export default App;
