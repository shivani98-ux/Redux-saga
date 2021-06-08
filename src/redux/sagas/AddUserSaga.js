import { call, put, takeEvery } from 'redux-saga/effects'

const apiUrl = `https://jsonplaceholder.typicode.com/posts`;
function getApi() {
  return fetch(apiUrl, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',

      }
  }).then(response => response.json())
    .catch((error) => {throw error})
}

function* fetchUsers(action) {
   try {
      const users = yield call(getApi);
      yield put({type: 'POST_USERS_SUCCESS', users: users});
   } catch (e) {
      yield put({type: 'POST_USERS_FAILED', message: e.message});
   }
}

function* AddUserSaga() {
   yield takeEvery('POST_USERS_REQUESTED', fetchUsers);
}
export default AddUserSaga



