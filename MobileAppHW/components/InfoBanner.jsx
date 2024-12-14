import { Image, StyleSheet, Text, View } from "react-native";
import DefaultImage from "../assets/images/default.jpg";

export default function InfoBanner({ color, value }) {
  return (
    <View style={styles.container}>
      <Image source={DefaultImage} style={styles.image} />
      <Text style={styles.name}>Крутий фотограф</Text>
      <View style={styles.info}>
        <View style={styles.statistic}></View>
        <View style={styles.geo}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontFamily: "Roboto-Medium",
  },
  image: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    rowGap: 8,
  },
});
