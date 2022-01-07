import { Post } from "./Post";

export interface PostAction {
  type: string;
  payload: Post
}