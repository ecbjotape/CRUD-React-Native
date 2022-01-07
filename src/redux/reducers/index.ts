import { combineReducers } from 'redux';
import createPost from './createPost';

export default () => combineReducers({
    Post: createPost,
});
