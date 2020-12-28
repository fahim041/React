import jsonplaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
    const response = await jsonplaceholder.get('/posts');

    dispatch({type: 'FETCH_POSTS', payload : response.data});
}

export const fetchUser =  () => async dispatch => {
    const response = await jsonplaceholder.get(`/users`);

    dispatch({type:'FETCH_USER', payload : response.data});
}