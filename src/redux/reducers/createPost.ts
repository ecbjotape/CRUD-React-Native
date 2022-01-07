import { createAction, createReducer } from '@reduxjs/toolkit';
import { Post } from '../../interfaces/redux/Post';

const post = createAction<Post>('crud/create');

const initialState = { id: 0, title: '', body: '' };

const createPost = createReducer(initialState, (builder) => {
  builder
    .addCase(post, (state, action) => ({
      ...state,
      id: action.payload.id,
      title: action.payload.title,
      body: action.payload.body,

    }))
});

export default createPost;