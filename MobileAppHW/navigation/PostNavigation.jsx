import { createStackNavigator } from "@react-navigation/stack";
import CommentsScreen from "../Screens/CommentsScreen";
import MapScreen from "../Screens/MapScreen";
import BackArrowIcon from "../components/icons/BackArrowIcon";
import { useSelector } from "react-redux";

const PostStack = createStackNavigator();

export default function PostNavigation() {
  const user = useSelector((state) => state.user.userInfo);

  return (
    <PostStack.Navigator>
      <PostStack.Screen
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
      <PostStack.Screen
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
    </PostStack.Navigator>
  );
}
