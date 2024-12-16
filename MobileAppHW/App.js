import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { Text } from "react-native";
import { useEffect } from "react";
import MainNavigation from "./navigation/MainNavigation";
import PostNavigation from "./navigation/PostNavigation.jsx";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store.store}>
      <PersistGate
        loading={<Text>Loading...</Text>}
        persistor={store.persistor}
      >
        <AuthListener />
      </PersistGate>
    </Provider>
  );
}

const AuthListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Dispatch>>>");
  }, [dispatch]);
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};
