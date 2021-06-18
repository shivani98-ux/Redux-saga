import { render } from '@testing-library/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useCallback } from "react";
import { getUsers } from '../redux/actions/users';
import { deleteUsers } from '../redux/actions/delete';

let dispatch;
const usersPerPage = 3;
let arrayForHoldingUsers = [];
const Card = (props) => {
  const [usersToShow, setUsersToShow] = useState([]);
  const [next, setNext] = useState(3);

  const loopWithSlice = (start, end) => {
    const slicedUsers = users.slice(start, end);
    arrayForHoldingUsers = [...arrayForHoldingUsers, ...slicedUsers];
    setUsersToShow(arrayForHoldingUsers);
  };

  useEffect(() => {
    loopWithSlice(0, usersPerPage);
  }, []);

  const handleShowMoreUsers = () => {
    loopWithSlice(next, next + usersPerPage);
    setNext(next + usersPerPage);
  };

  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const loading = useSelector(state => state.users.loading);
  const error = useSelector(state => state.users.error);

  useEffect(() => {
    dispatch(getUsers());
  }, [])

  
  
  

  
  return (
    
    <div>
   <div className="card">
     <div className="card-body">
    
       <h5 className="card-id">Id: {props.user.id}</h5>
      
       <h5 className="card-title mb-2 text-muted">Title :{props.user.title}</h5>
       <h6 className="card-user mb-2 text-muted"> Body: {props.user.body}</h6>
       <div className="col-5">
      
              </div> 
              
             </div>
       </div> 
      
       <div > 
      

      </div>
       
       </div>
       
 )
}
export default Card;

