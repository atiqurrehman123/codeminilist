import axios from "axios"
import { FETCH_POSTS } from './types';

export const fetchPosts = () => dispatch => {
  axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts.data
      })
    );
};
