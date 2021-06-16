import { render } from '@testing-library/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useCallback } from "react";

import { deleteUsers } from '../redux/actions/delete';

let dispatch;
const Card = (props) => {
  
  dispatch = useDispatch();
  let users = useSelector(state => state.users.users);
 
  console.log("Users List: ", users);
  const id = users.id;
  

  
  return (
    
    <div>
   <div className="card">
     <div className="card-body">
    
       <h5 className="card-id">Id: {props.user.id}</h5>
      
       <h5 className="card-title mb-2 text-muted">Title :{props.user.title}</h5>
       <h6 className="card-user mb-2 text-muted"> Body: {props.user.body}</h6>
       <div className="col-5">
              </div> 
              <button className="btn btn-danger shadow-none" onClick={(e) => deleteUserById(e, id)}><span className="glyphicon glyphicon-trash" aria-hidden="true" title="Delete User">Delete</span></button>
             </div>
       </div> 
      
       <div >
      

      </div>
       
       </div>
       
 )
}
export default Card;

function deleteUserById(event, id) {
  event.preventDefault();
  console.log("id", id);
  dispatch(deleteUsers(id));
  alert("User deleted successfully");
}