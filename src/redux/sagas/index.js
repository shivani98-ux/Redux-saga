import { all } from 'redux-saga/effects'
import userByIdSaga from './userByIdSaga'
import userSaga from './userSaga'
import sortSaga from'./sortSaga'


export default function* rootSaga() {
  yield all([
    userSaga(),
    userByIdSaga(),
    sortSaga(),

  ])
}