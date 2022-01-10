import { StackNavigationProp } from "@react-navigation/stack";

export type TaskStackParamList = {
  MainScreen: undefined;
}

export type mainScreenNavigationProp = StackNavigationProp<TaskStackParamList, 'MainScreen'>;