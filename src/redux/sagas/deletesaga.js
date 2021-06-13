import { call, put, takeEvery } from 'redux-saga/effects'


const removeData = (id) => {
   if (window.confirm("Are you sure?")) {
      return fetch('https://jsonplaceholder.typicode.com/posts' + id,
           {
               method: 'DELETE',
               headers: {
                   'Accept': 'application/json',
                   'content-Type': 'application/json'
               }
           })

           .then(response => response.json())
   .catch((error) => {throw error})
   }
};

function* fetchUsers(action) {
   try {
      const users = yield call(removeData);
      yield put({type: 'DELETE_USERS_SUCCESS', users: users});
   } catch (e) {
      yield put({type: 'DELETE_USERS_FAILED', message: e.message});
   }
}

function* deletesaga() {
   yield takeEvery('DELETE_USERS_REQUESTED', fetchUsers);
}
export default deletesaga



