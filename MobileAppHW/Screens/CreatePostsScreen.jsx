import { StyleSheet, Text, View } from "react-native";

export default function CreatePostsScreen() {
  return (
    <View style={styles.container}>
      <Text>
        Create posts content will be here. There is no Tab Bar - press back
        arrow to go back.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
