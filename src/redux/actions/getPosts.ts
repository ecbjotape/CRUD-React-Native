import { PostAction } from '../../interfaces/redux/PostAction';

export default function postAction(
  all: [],
  selected: {
    body: string,
    id: number,
    title: string,
    userId: number
  }
): PostAction {
  return {
    payload: {
      all,
      selected,
    },
    type: '',
  };
}
