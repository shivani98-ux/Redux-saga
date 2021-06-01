import { all } from 'redux-saga/effects'
import userByIdSaga from './userByIdSaga'
import userSaga from './userSaga'

export default function* rootSaga() {
  yield all([
    userSaga(),
    userByIdSaga(),
  
  ])
}