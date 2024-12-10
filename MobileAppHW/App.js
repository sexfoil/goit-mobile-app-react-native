import "react-native-gesture-handler";
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      {/* <RegistrationScreen /> */}
      <LoginScreen />
    </NavigationContainer>
  );
}
