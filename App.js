import "react-native-gesture-handler";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";

import * as Splashscreen from "expo-splash-screen";
import * as Font from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AppNavigator from "./navigation/AppNavigator";

Splashscreen.preventAutoHideAsync();

export default function App() {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync({
          regular: require("./assets/fonts/OpenSans-Regular.ttf"),
          medium: require("./assets/fonts/OpenSans-Medium.ttf"),
          bold: require("./assets/fonts/OpenSans-Bold.ttf"),
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoaded(true);
      }
    };
    prepare();
  }, []);

  const onLayoutHandler = useCallback(async () => {
    if (isLoaded) {
      await Splashscreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider style={styles.container} onLayout={onLayoutHandler}>
      <AppNavigator />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "regular",
  },
});
