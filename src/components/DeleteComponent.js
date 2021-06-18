import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/users';
import { deleteUsers } from '../redux/actions/delete';
import ReactPaginate from 'react-paginate';
import Paginations from "./Pagination";
let dispatch;
let currentData;
const DeleteUser = () => {

  dispatch = useDispatch();
  let users = useSelector(state => state.users.users);

  const [currentPage, setCurrentPage] = useState(1);
  let NUM_OF_RECORDS = users.length;
  let LIMIT = 5;

  const onPageChanged = useCallback(
    (event, page) => {
      event.preventDefault();
      setCurrentPage(page);
    },
    [setCurrentPage]
  );
  currentData = users.slice(
    (currentPage - 1) * LIMIT,
    (currentPage - 1) * LIMIT + LIMIT
  );

 
  

  React.useEffect(() => {
    Users()
  }, []);

  const Users = () => {
    dispatch(getUsers())
  }

 

  console.log("userList: ", users);
  if (!Array.isArray(users)) {
    users = [];
    console.log("Set users to blank array");
  }
  
  return (
    <div className="User px-5">
      <table border="2" class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th >User_Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {renderTableData(currentData)}
        </tbody>
      </table>
      <div className="pagination-wrapper">
          <Paginations
            totalRecords={NUM_OF_RECORDS}
            pageLimit={LIMIT}
            pageNeighbours={2}
            onPageChanged={onPageChanged}
            currentPage={currentPage}
          />
          </div>
   
    </div>

  )
}

function renderTableData(currentData) {
  console.log("userList: ", currentData);
  return currentData.map((user, index) => {
    const { id, userId, title, body } = user
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{userId}</td>
        <td>{title}</td>
        <td>{body}</td>
        <td>
          &nbsp;&nbsp;&nbsp;

          <button className="btn btn-danger shadow-none" onClick={(e) => deleteUserById(e, id)}><span className="glyphicon glyphicon-trash" aria-hidden="true" title="Delete User">Delete</span></button>

        </td>
      </tr>
      
    )
  })
};

function deleteUserById(event, id) {
  event.preventDefault();
  console.log("id", id);
  dispatch(deleteUsers(id));
  alert("User deleted successfully");
}



export default DeleteUser;