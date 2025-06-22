import "./global.css";
import { Assets as NavigationAssets } from "@react-navigation/elements";
import { Asset } from "expo-asset";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { AuthNavigation, Navigation } from "./navigation";
import { SafeAreaView } from "react-native";
import useAuthStore from "./store/auth";

Asset.loadAsync([
  ...NavigationAssets,
  require("./assets/newspaper.png"),
  require("./assets/bell.png"),
]);

SplashScreen.preventAutoHideAsync();

export function App() {
  const { loggedIn } = useAuthStore();
  if (!loggedIn) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation
          linking={{
            enabled: "auto",
            prefixes: [
              // Change the scheme to match your app's scheme defined in app.json
              "helloworld://",
            ],
          }}
          onReady={() => {
            SplashScreen.hideAsync();
          }}
        />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <AuthNavigation
          linking={{
            enabled: "auto",
            prefixes: [
              // Change the scheme to match your app's scheme defined in app.json
              "helloworld://",
            ],
          }}
          onReady={() => {
            SplashScreen.hideAsync();
          }}
        />
      </SafeAreaView>
    );
  }
}
