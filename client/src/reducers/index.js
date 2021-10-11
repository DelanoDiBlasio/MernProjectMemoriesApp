import { combineReducers } from 'redux';

//routes for the reducers
import posts from './posts';
import auth from './auth';

export const reducers = combineReducers({ posts, auth });
