import { Image, StyleSheet, Text, View } from "react-native";
import DefaultImage from "../assets/images/default.jpg";
import CommentIcon from "./icons/CommentIcon";
import GeoMarkerIcon from "./icons/GeoMarkerIcon";
import LikeIcon from "./icons/LikeIcon";

export default function PostCard({ isProfile = true }) {
  return (
    <View style={styles.container}>
      <Image source={DefaultImage} style={styles.image} />
      <Text style={styles.name}>Крутий фотограф</Text>
      <View style={styles.info}>
        <View style={styles.statistic}>
          <View style={styles.item}>
            <View style={styles.svg}>
              <CommentIcon />
            </View>
            <Text style={styles.value}>10</Text>
          </View>
          {isProfile && (
            <View style={styles.item}>
              <View style={styles.svg}>
                <LikeIcon />
              </View>
              <Text style={styles.value}>10</Text>
            </View>
          )}
        </View>
        <View style={styles.geo}>
          <View style={styles.svg}>
            <GeoMarkerIcon />
          </View>
          <Text style={{ ...styles.value, textDecorationLine: "underline" }}>
            Укрїна, Київ
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statistic: {
    flexDirection: "row",
    columnGap: 24,
  },
  item: {
    flexDirection: "row",
    columnGap: 8,
  },
  svg: {
    width: 24,
    height: 24,
  },
  value: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  geo: {
    flexDirection: "row",
    columnGap: 8,
  },
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
    // flex: 1,
    width: "100%",
    justifyContent: "space-between",
    rowGap: 8,
  },
});
