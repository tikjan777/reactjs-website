export const FETCH_USERS_BY_QUERY = 'FETCH_USERS_BY_QUERY';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAIL = 'FETCH_USERS_FAIL';
export const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER';

export function fetchUsersByQuery(queryParams) {
  return {
    type: FETCH_USERS_BY_QUERY,
    queryParams
  };
}

export function fetchUsersSuccess(users, totalCount) {
  return {
    type: FETCH_USERS_SUCCESS,
    users,
    totalCount
  };
}

export function fetchUsersFail(error) {
  return {
    type: FETCH_USERS_FAIL,
    error
  };
}


export function setPageNumber(number) {
  return {
    type: SET_PAGE_NUMBER,
    number
  };
}

const actions = {
  FETCH_USERS_BY_QUERY,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  SET_PAGE_NUMBER,

  fetchUsersByQuery,
  fetchUsersSuccess,
  fetchUsersFail,
  setPageNumber
};

export default actions;