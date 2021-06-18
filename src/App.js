/*import React, { useState, useEffect } from 'react';
import AddComponent from './components/AddComponent';

import axios from 'axios';
import './App.css';

function App() {
  return (
    <div className="App">
      <AddComponent></AddComponent>
    </div>
  )
}
export default App;*/
import React, { Component, lazy, Suspense } from 'react';
//import UsersComponent from './components/UsersComponent';
import Home from './components/HomeComponent';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import HomeComponent from './components/HomeComponent'
import SearchById from './components/SearchById';
import Sort from './components/SortbyId'
import SortbyBody from './components/SortbyBody'
import SortbyTitle from './components/SortbyTitle'
import AddComponent from './components/AddComponent';
import DeleteComponent from './components/DeleteComponent'
const UsersComponent = lazy(() => import("./components/UsersComponent"));

function App() {
  return (
    
    <Router>
    <div>
      <nav >
      <ul class="nav nav-tabs navbar navbar-expand-lg navbar-light bg-light">
<li class="nav-item">
  <a class="nav-link active" aria-current="page" href="/">Home</a>
</li>
<li class="nav-item">
  <a class="nav-link" href="/users">All Users</a>
</li>
<li class="nav-item">
  <a class="nav-link" href="/SearchById">Find User</a>
</li>

<li class="nav-item">
  <a class="nav-link" href="/SortbyBody">Sort By Body</a>
</li>
<li class="nav-item">
  <a class="nav-link" href="/SortbyTitle">Sort By Title</a>
</li>
<li class="nav-item">
  <a class="nav-link " href="/Sort">Sort By ID</a>
</li>

<li class="nav-item">
  <a class="nav-link " href="/AddComponent">AddComponent</a>
</li>
<li class="nav-item">
  <a class="nav-link " href="/DeleteUser">DeleteUser</a>
</li>

</ul>
      </nav>


      <Switch>
      
      <Route path='/' component={HomeComponent} exact></Route>
      <Route path="/users">
        <Suspense fallback={<div>Loading.....</div>}>
          <UsersComponent></UsersComponent>
          </Suspense>
        </Route>
        <Route path='/SearchById'>
          <SearchById></SearchById>
        </Route>
       
        <Route path='/SortbyBody'>
          <SortbyBody></SortbyBody>
         
        </Route>
        <Route path='/SortbyTitle' >
          <SortbyTitle></SortbyTitle>
        </Route>
        <Route path="/Sort">
            <Sort></Sort>
          </Route>

          <Route path='/AddComponent' >
        <AddComponent></AddComponent>
      </Route>

      <Route path='/DeleteUser' >
        <DeleteComponent></DeleteComponent>
      </Route>

          <Route path='/' >
        <HomeComponent></HomeComponent>
      </Route>
      </Switch>
    </div>
  </Router>
   
  /*
    <div className="App">
     <AddComponent />
       
    </div>*/
  );
}

export default App;