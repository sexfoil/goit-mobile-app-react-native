import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import OwnerImage from "../assets/images/owner.jpg";
import PostCard from "../components/PostCard";

export default function PostsScreen() {
  const [posts, setPosts] = useState([
    { id: "1", title: "Post 1 Title" },
    { id: "2", title: "Post 2 Title" },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.owner}>
        <Image style={styles.ownerImage} source={OwnerImage} />
        <View>
          <Text style={styles.ownerInfoName}>Вячеслав Поляков</Text>
          <Text style={styles.ownerInfoEmail}>78slavapolyakov@gmail.com</Text>
        </View>
      </View>
      <FlatList
        style={styles.postsList}
        data={posts}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
      <PostCard />
    </View>
  );
}

const styles = StyleSheet.create({
  owner: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    columnGap: 8,
    width: "100%",
  },
  ownerImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  ownerInfoName: {
    fontSize: 13,
    fontFamily: "Roboto-Bold",
    color: "#212121",
  },
  ownerInfoEmail: {
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    color: "#21212180",
  },
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 32,
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
