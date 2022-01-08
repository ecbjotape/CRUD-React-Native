import { createAction, createReducer } from '@reduxjs/toolkit';
import { PostAction } from '../../interfaces/redux/PostAction';

const post = createAction<PostAction>('getPosts');

const initialState: PostAction = {
  type: '',
  payload: {
    all: [],
    selected: {
      body: '',
      id: null,
      title: '',
      userId: null
    }
  }
};

const getPosts = (state = initialState, action: PostAction) => {
  switch (action.type) {
    case 'getPosts':
      return { ...state, all: action.payload };
    case 'getPostById':
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};

export default getPosts;