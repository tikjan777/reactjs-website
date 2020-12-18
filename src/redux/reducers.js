import { combineReducers } from 'redux'
import homeReducer from './home/reducers';
import repositoriesReducer from './repositories/reducers';
import usersReducer from './users/reducers';

export default combineReducers({
  Home: homeReducer,
  Repositories: repositoriesReducer,
  Users: usersReducer,
})
