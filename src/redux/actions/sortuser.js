import * as type from '../types';

export function sortUsers() {
  return {
    type: type.SORT_USERS_REQUESTED,
  }
}