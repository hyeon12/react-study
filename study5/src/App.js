import React from 'react';
import Counter from './components/Counter';
import Todos from './components/Todos';

const App = () => {
  return (
    <div>
      <Counter number={0} />
      <hr />  {/* 가로 구분선*/}
      <Todos />
    </div>
  );
};

export default App;