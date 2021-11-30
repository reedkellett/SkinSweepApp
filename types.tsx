/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Login: undefined;
  SignUp: undefined;
  EntryScreen: undefined;
  FolderScreen: undefined;
  InputScreen: undefined;
};

export type navRoute = {
  params : any;
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Dashboard: undefined;
  Scanner: undefined;
  Profile: undefined;
};

export type PhotoLogEntry = {
  id: string,
  name: string;
  photoId: string;
};

export type Entry = {
  id: string,
  date: string,
  photoId: string,
  status: string,
  name: string,
  notes: string,
  diagnosis: string,
  confidence: number
}

export type Resource = {
  id: string,
  title: string,
  imgUrl: string,
  url: string
}

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
