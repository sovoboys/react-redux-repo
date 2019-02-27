import Typicode from '../apis/typicode';
import _ from 'lodash';

export const fetchData = () => {
    return async (dispatch /*, getState*/) => {
        const response = await Typicode.get('/posts');
        dispatch({
            type: 'FETCH_DATA',
            payload: response.data,
        });
    };
};
