import axios from 'axios';
import {SEARCH_USERS} from '../url';

export function getUsers(query){
  return axios.get(SEARCH_USERS, {params : query});
};