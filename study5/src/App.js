import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr /> {/* 가로 구분선*/}
      <TodosContainer />
    </div>
  );
};

export default App;
