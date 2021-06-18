import React, { useEffect,useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/users';
import ReactPaginate from 'react-paginate';
import Card from './CardComponent';


const Users = () => {

  const[user, setUser] = useState([]);
  const [visible, setVisible] = useState(3);
  

  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const loading = useSelector(state => state.users.loading);
  const error = useSelector(state => state.users.error);

  
  useEffect(() => {
    dispatch(getUsers());
  }, [])

 

  return (
    <>
   
      {users.loading && <p>Loading...</p>}
      {users.length === 0 && !loading && <p>No users available!</p>}
      {error && !loading && <p>{error}</p>}
      {users.length > 0 && users.map((user) => (
        <Card key ={user.id} user={user.slice(0,3)}/> 
      ))}
     
      
    </>
  )
}
export default Users;