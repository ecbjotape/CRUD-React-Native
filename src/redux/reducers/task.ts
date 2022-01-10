import { createAction, createReducer } from '@reduxjs/toolkit';
import { TaskAction } from '../../interfaces/redux/TaskAction';

const task = createAction<TaskAction>('getPosts');

const initialState: TaskAction = {
  Task: []
};

const taskReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(task, (state, action) => ({
      ...state,
      Task: action.payload.Task
    }))
});

export default taskReducer;