import React from 'react';
import MyComponent from './myComponent';
import AppRouterMain from "./app/RouterMain";

const App = () => {
  return (
    <div>
      <MyComponent>리액트</MyComponent>
      <AppRouterMain/>
    </div>
  );
};

export default App;
