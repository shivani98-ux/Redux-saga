import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortUsers } from '../redux/actions/sortuser';
import Card from './CardComponent';

const SortbyTitle = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const loading = useSelector(state => state.users.loading);
  const error = useSelector(state => state.users.error);

  useEffect(() => {
    dispatch(sortUsers());
  }, [])
 

  const[sort, setSort] = useState('asc');
  users.sort( (a, b) =>{

    const isReversed = (sort=== 'asc') ? 1: -1;
    return isReversed * a.title.localeCompare(b.title);
  })
  return (
    <>
    <button className="button" onClick={()=>setSort('asc')}>Sort By Asc</button>
    <button className="button" onClick={()=>setSort('desc')} >Sort By DESC</button>

      {users.loading && <p>Loading...</p>}
      {users.length === 0 && !loading && <p>No users available!</p>}
      {error && !loading && <p>{error}</p>}
      {users.length > 0 && users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </>
  )
}
export default SortbyTitle;