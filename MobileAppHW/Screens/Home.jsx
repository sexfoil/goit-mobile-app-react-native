import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import AddIcon from "../components/icons/AddIcon";
import BackArrowIcon from "../components/icons/BackArrowIcon";
import LogoutIcon from "../components/icons/LogoutIcon";
import MenuIcon from "../components/icons/MenuIcon";
import UserIcon from "../components/icons/UserIcon";
import { useDispatch } from "react-redux";
import { logout, logoutFromApp } from "../utils/auth";

const Tabs = createBottomTabNavigator();

export default function HomeScreen() {
  const dispatch = useDispatch();

  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={{
        headerTitleAlign: "center",
        headerLeftContainerStyle: { paddingLeft: 16 },
        headerRightContainerStyle: { paddingRight: 16 },
        tabBarStyle: {
          paddingTop: 9,
          paddingHorizontal: 82,
          height: 83,
        },
        tabBarLabel: "",
      }}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerRight: () => (
            <LogoutIcon onPress={() => logoutFromApp(dispatch)} />
          ),
          tabBarIcon: ({}) => <MenuIcon />,
        }}
      />
      <Tabs.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          title: "Створити публікацію",
          headerLeft: () => (
            <BackArrowIcon onPress={() => navigation.goBack()} />
          ),
          tabBarStyle: {
            display: "none",
          },
          tabBarIcon: () => <AddIcon />,
        })}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "",
          tabBarIcon: () => <UserIcon />,
        }}
      />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "green",
    fontSize: 32,
    textAlign: "center",
  },
});
