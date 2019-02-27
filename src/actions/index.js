import Typicode from '../apis/typicode';
import _ from 'lodash';

export const fetchPostsAndUsers = () => {
    return async (dispatch, getState) => {
        await dispatch(fetchPosts());

        _.chain(getState().posts)
            .map('userId')
            .uniq()
            .map( userId => dispatch(fetchUser(userId)))
            .value()
        ;
    };
};

const fetchPosts = () => {
    return async (dispatch /*, getState*/) => {
        const response = await Typicode.get('/posts');
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data,
        });
    };
};

const fetchUser = (userId) => {
    return async (dispatch /*, getState*/) => {
        const response = await Typicode.get('/users/' + userId );
        dispatch({
            type: 'FETCH_USER',
            payload: response.data,
        });
    };
};
