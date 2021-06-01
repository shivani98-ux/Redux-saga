import React, { Component, lazy, Suspense } from 'react';
import SearchById from './components/SearchById'
import {useState} from 'react'
import './App.css';

import AddComponent from './components/AddComponent';
const UsersComponent = lazy(() => import("./components/UsersComponent"));

function App() {
  return (
    <div className="App">
     <SearchById />
      <Suspense fallback={<div>Loading.....</div>}>
      <UsersComponent />
      
      </Suspense>
     
     
    </div>
  );
}

export default App;