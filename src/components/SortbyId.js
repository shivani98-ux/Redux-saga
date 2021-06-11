import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortUsers } from '../redux/actions/sortuser';
import Card from './CardComponent';

const Sort = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const loading = useSelector(state => state.users.loading);
  const error = useSelector(state => state.users.error);

  useEffect(() => {
    dispatch(sortUsers());
  }, [])
 
  
  const[sort, setSort] = useState('asc');
  users.sort( (a, b) =>{

    const isReversed = (sort=== 'asc') ? a.id- b.id : b.id - a.id;
    return isReversed 
  })

 
 
  
  return (
    <>
    <div className="SortbyBody px-5 mt-5 ">
    <div class="d-grid gap-2 col-6 mx-auto">
    <button className="button" class="btn btn-outline-secondary" onClick={()=>setSort('asc')}>Ascending</button>
    <button className="button" class="btn btn-outline-secondary" onClick={()=>setSort('desc')} >Descending</button>
    </div>
   </div>

      {users.loading && <p>Loading...</p>}
      {users.length === 0 && !loading && <p>No users available!</p>}
      {error && !loading && <p>{error}</p>}
      {users.length > 0 && users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </>
  )
}
export default Sort;