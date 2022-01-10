import { StackNavigationProp } from "@react-navigation/stack";

export type PostStackParamList = {
  MainScreen: undefined;
}

export type mainScreenNavigationProp = StackNavigationProp<PostStackParamList, 'MainScreen'>;