import {call, put, takeLatest} from 'redux-saga/effects';
import actions from './actions';
import {getUsers} from '../../services/userServices';

function* fetchUsers(action) {

  try {
    const response = yield call(getUsers, action.queryParams);
    yield put(actions.fetchUsersSuccess(response?.data?.items, response?.data?.total_count));
  } catch (e) {
    yield put(actions.fetchUsersFail(e.message()));
  }

}

function* usersSaga() {
  yield takeLatest(actions.FETCH_USERS_BY_QUERY, fetchUsers);
}

export default usersSaga;