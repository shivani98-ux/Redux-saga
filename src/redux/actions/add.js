import * as type from '../types';

export function addUsers() {
  return {
    type: type.ADD_USERS_REQUESTED,
  }
}