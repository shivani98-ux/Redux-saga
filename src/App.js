import React, { Component, lazy, Suspense } from 'react';
//import Users from './components/UsersComponent';
import './App.css';
import AddComponent from './components/AddComponent';
const UsersComponent = lazy(() => import("./components/UsersComponent"));

function App() {
  return (
    <div className="App">
     
      <Suspense fallback={<div>Loading.....</div>}>
      <UsersComponent />
      </Suspense>
    </div>
  );
}

export default App;