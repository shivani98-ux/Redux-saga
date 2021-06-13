import { all } from 'redux-saga/effects'
import userByIdSaga from './userByIdSaga'
import userSaga from './userSaga'
import sortSaga from'./sortSaga'
import AddUserSaga from './AddUserSaga'
import deletesaga from './deletesaga'
export default function* rootSaga() {
  yield all([
    userSaga(),
    userByIdSaga(),
    sortSaga(),
    AddUserSaga(),
    deletesaga(),

  ])
}