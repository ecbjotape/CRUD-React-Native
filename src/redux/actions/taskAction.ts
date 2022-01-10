import { TaskAction } from '../../interfaces/redux/TaskAction';

export default function taskAction(
  Task: []
): TaskAction {
  return {
    type: 'task/add',
    payload: {
      Task
    },
  };
}
