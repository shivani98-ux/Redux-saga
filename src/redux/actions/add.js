import * as type from '../types';

const addUsers=(users)=>{
  return {
    type: type.ADD_USERS_REQUESTED,
    payload: users
  }
}
export default addUsers

/*
export function addUsers() {
  return {
    type: type.ADD_USERS_REQUESTED,
  }
}*/