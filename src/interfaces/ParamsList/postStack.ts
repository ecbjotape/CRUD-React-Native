import { StackNavigationProp } from "@react-navigation/stack";
import { Post } from "../redux/Post";

export type PostStackParamList = {
  MainScreen: undefined;
  PostCreate: undefined;
  PostDetails: { id: number};
}

export type mainScreenNavigationProp = StackNavigationProp<PostStackParamList, 'MainScreen'>;
export type postCreatenNavigationProp = StackNavigationProp<PostStackParamList, 'PostCreate'>;
export type postDetailslNavigationProp = StackNavigationProp<PostStackParamList, 'PostDetails'>;