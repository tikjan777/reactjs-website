import actions from './actions';

const initialState = {
  users: [],
  totalCount: 0,
  pageNumber: 1,
  error: false,
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: [...action.users],
        totalCount: action.totalCount,
      };
    case actions.FETCH_USERS_FAIL:
      return {
        ...state,
        error: action.error
      };
    case actions.SET_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.number,
      }
    default:
      return state
  }
  return state;
}

export default usersReducer;