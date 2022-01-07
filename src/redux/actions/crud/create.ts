import { PostAction } from '../../../interfaces/redux/PostAction';

export default function postAction(
  title: string,
  body: string,
  id: number
): PostAction {
  return {
    type: 'crud/create',
    payload: {
      title,
      body,
      id,
    },
  };
}
