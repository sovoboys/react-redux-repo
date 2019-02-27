import { combineReducers } from 'redux';
import postReducer from './post_reducer';
import userReducer from './user_reducer';

export default combineReducers({
    posts: postReducer,
    users: userReducer,
})