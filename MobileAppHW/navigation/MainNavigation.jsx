import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/LoginScreen";
import RegistrationScreen from "../Screens/RegistrationScreen";
import CommentsScreen from "../Screens/CommentsScreen";
import MapScreen from "../Screens/MapScreen";
import Home from "../Screens/Home";
import BackArrowIcon from "../components/icons/BackArrowIcon";
import { useSelector } from "react-redux";

const MainStack = createStackNavigator();

export default function MainNavigation() {
  const user = useSelector((state) => state.user.userInfo);

  return (
    <MainStack.Navigator initialRouteName="Home">
      {!user ? (
        <>
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      ) : (
        <>
          <MainStack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="Comments"
            component={CommentsScreen}
            options={({ navigation }) => ({
              title: "Комментарі",
              headerLeft: () => (
                <BackArrowIcon onPress={() => navigation.goBack()} />
              ),
              headerTitleAlign: "center",
              headerLeftContainerStyle: { paddingLeft: 16 },
              headerRightContainerStyle: { paddingRight: 16 },
            })}
          />
          <MainStack.Screen
            name="Map"
            component={MapScreen}
            options={({ navigation }) => ({
              title: "Карта",
              headerLeft: () => (
                <BackArrowIcon onPress={() => navigation.goBack()} />
              ),
              headerTitleAlign: "center",
              headerLeftContainerStyle: { paddingLeft: 16 },
              headerRightContainerStyle: { paddingRight: 16 },
            })}
          />
        </>
      )}
    </MainStack.Navigator>
  );
}
