import {
  FlatList,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import DefaultImage from "../assets/images/default.jpg";
import InputComment from "../components/InputComment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addPost } from "../utils/firestore";

export default function CommentsScreen() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const user = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    console.log("USE EFFECT", comment);
  }, [comments]);

  const handleAddComment = async () => {
    console.log("Comment", comment);
    console.log("Comments", comments);

    updatedComments = [...comments, comment];
    setComment("");
    setComments(updatedComments);
    await addPost(user?.uid, comments);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          style={{ ...styles.image, borderWidth: 0 }}
          source={DefaultImage}
        ></Image>
        <FlatList
          style={styles.postsList}
          data={comments}
          renderItem={({ item }) => (
            <View style={styles.comment}>
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={(item) => item}
          ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
        />

        <InputComment
          inputText={comment}
          handleInputText={setComment}
          handleAddComment={handleAddComment}
          placeholder={"Комментувати..."}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  comment: {
    padding: 16,
    textAlignVertical: "center",
    textAlign: "center",
    width: "100%",
    backgroundColor: "#F6F6F650",
    borderRadius: 5,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 240,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "center",
    rowGap: 32,
    paddingTop: 32,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
  },
});
