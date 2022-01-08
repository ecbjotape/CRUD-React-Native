import { combineReducers } from 'redux';
import getPosts from './getPosts';

export default () => combineReducers({
    Post: getPosts,
});
