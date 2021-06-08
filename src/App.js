import React, { Component, lazy, Suspense } from 'react';
//import UsersComponent from './components/UsersComponent';
import Home from './components/HomeComponent';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import HomeComponent from './components/HomeComponent'
import SearchById from './components/SearchById';
import Sort from './components/SortbyId'
const UsersComponent = lazy(() => import("./components/UsersComponent"));

function App() {
  return (
    <Router>
    <div>
      <nav >
      <ul class="nav nav-tabs">
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
  <a class="nav-link" href="/Sort">Sort User</a>
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
        <Route path='/SearchById' component={SearchById} exact></Route>
        <Route path='/Sort' component={Sort} exact></Route>
      </Switch>
    </div>
  </Router>
    /*
    <div className="App">
     <Sort></Sort>
       
    </div>*/
  );
}

export default App;
