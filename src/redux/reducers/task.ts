import { createAction, createReducer } from '@reduxjs/toolkit';
import { Task } from '../../interfaces/redux/Task';

const task = createAction<Task>('task/add');

const initialState = {
  Task: []
};

const taskReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(task, (state, action) => ({
      ...state,
      Task: action.payload.Task,
    }))
});

export default taskReducer;