import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";

import HomeScreen from "./screens/home";
import WelcomeScreen from "./screens/welcome";
import LoginScreen from "./screens/login";
import SignupScreen from "./screens/signup";
import CONSTANTS from "../../constant";

const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
    contentStyle: {
      backgroundColor: CONSTANTS.colors.background,
      paddingHorizontal: Number(CONSTANTS.spacing.screenPadding),
    },
  },
  initialRouteName: "Welcome",
  screens: {
    Welcome: {
      screen: WelcomeScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Signup: {
      screen: SignupScreen,
    },
  },
});

const AuthStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
    },
  },
});
export const Navigation = createStaticNavigation(RootStack);
export const AuthNavigation = createStaticNavigation(AuthStack);


type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
