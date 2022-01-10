import { Task } from './Task';


export interface TaskAction {
  type: string,
  payload: Task,
}