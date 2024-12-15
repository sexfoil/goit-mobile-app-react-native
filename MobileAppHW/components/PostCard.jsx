import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DefaultImage from "../assets/images/default.jpg";
import CommentIcon from "./icons/CommentIcon";
import GeoMarkerIcon from "./icons/GeoMarkerIcon";
import LikeIcon from "./icons/LikeIcon";
import { useNavigation } from "@react-navigation/native";

export default function PostCard({
  id,
  image = DefaultImage,
  name,
  comments = [],
  likes = 0,
  location = { name: "N/A", lat: 0, lon: 0 },
  isProfile = true,
}) {
  const navigation = useNavigation();

  const navigateToComments = () => {
    navigation.navigate("Comments", {
      comments,
    });
  };

  const navigateToMap = () => {
    navigation.navigate("Map", {
      name,
      location,
    });
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name ? name : `Image_${id}`}</Text>
      <View style={styles.info}>
        <View style={styles.statistic}>
          <TouchableOpacity style={styles.item} onPress={navigateToComments}>
            <View style={styles.svg}>
              <CommentIcon />
            </View>
            <Text style={styles.value}>{comments.length}</Text>
          </TouchableOpacity>
          {isProfile && (
            <View style={styles.item}>
              <View style={styles.svg}>
                <LikeIcon />
              </View>
              <Text style={styles.value}>{likes}</Text>
            </View>
          )}
        </View>
        <TouchableOpacity style={styles.geo} onPress={navigateToMap}>
          <View style={styles.svg}>
            <GeoMarkerIcon />
          </View>
          <Text style={{ ...styles.value, textDecorationLine: "underline" }}>
            {location.name}
          </Text>
        </TouchableOpacity>
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
    width: "100%",
    justifyContent: "space-between",
    rowGap: 8,
  },
});
