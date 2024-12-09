import { useNavigation, useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import AddIcon from "../components/icons/AddIcon";
import BackArrowIcon from "../components/icons/BackArrowIcon";
import LogoutIcon from "../components/icons/LogoutIcon";
import MenuIcon from "../components/icons/MenuIcon";
import TrashIcon from "../components/icons/TrashIcon";
import UserIcon from "../components/icons/UserIcon";

const Tabs = createBottomTabNavigator();

export default function HomeScreen() {
  const rootNavigation = useNavigation();
  const { params } = useRoute();

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
            <LogoutIcon onPress={() => rootNavigation.goBack()} />
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
