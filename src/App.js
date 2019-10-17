import React from 'react';
import logo from './logo.svg';
import './App.css';

import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';

function App() {
  function getProps(param) {
    console.log(param);

  }
  return (
    <div className="App">
      <FunctionalComponent msg='message from parent to function' getPropsAttribute={getProps}></FunctionalComponent>
      <ClassComponent msg='message from parent to class' getPropsAttribute={getProps}></ClassComponent>
    </div>
  );
}

export default App;
