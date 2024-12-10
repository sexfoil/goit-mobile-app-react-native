import { Image, StyleSheet, Text, View } from "react-native";
import AddIcon from "../assets/images/add_icon.png";

export default function AvatarBox() {
  return (
    <View style={styles.container}>
      <Image source={AddIcon} style={styles.addIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  addIcon: {
    position: "absolute",
    right: -12,
    bottom: 14,
  },
  container: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
});
