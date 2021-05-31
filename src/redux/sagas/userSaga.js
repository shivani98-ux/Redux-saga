import { call, put, takeEvery } from 'redux-saga/effects'

const apiUrl = `https://jsonplaceholder.typicode.com/posts`;
function getApi() {
  return fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',

      }
  }).then(response => response.json())
    .catch((error) => {throw error})
}

function* fetchUsers(action) {
   try {
      const users = yield call(getApi);
      yield put({type: 'GET_USERS_SUCCESS', users: users});
   } catch (e) {
      yield put({type: 'GET_USERS_FAILED', message: e.message});
   }
}

function* userSaga() {
   yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}
/*
const postapiUrl = `https://jsonplaceholder.typicode.com/posts`;
function postApi() {
  return fetch(postapiUrl, {
      method: 'POST',
      headers: {
         Accept : 'application/json',
          'Content-Type': 'application/json',

      },
      body: JSON.stringify({
         title: '',
         body : '',
      }),
  });
  function* fetchUsers(action) {
   try {
      const users = yield call(postApi);
      yield put({type: 'POST_USERS', users: users});
   } catch (e) {
      yield put({type: 'POST_USERS', message: e.message});
   }
}

function* userSaga() {
   yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}


}
*/



export default userSaga;