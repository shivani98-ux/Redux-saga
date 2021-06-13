import { render } from '@testing-library/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUsers } from '../redux/actions/delete';
const Card = (props) => {

  let dispatch;
  
  dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
 
  console.log("Users List: ", users);
  const id = users.id;
  const userId = users.userId;
  const title = users.title;
  const body = users.body;


  const removeData = (id) => {
    if (window.confirm("Are you sure?")) {

        fetch('https://jsonplaceholder.typicode.com/posts/' + id,
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'content-Type': 'application/json'
                }
            })

            .then(console.log("Deleted"))
            .catch(err => console.log(err));
    }
};
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
      
       <button className="btn-xs btn-danger shadow-none deletebutton" onClick={() => removeData(id)}>Delete</button>
       </div>
 )
}
export default Card;

 