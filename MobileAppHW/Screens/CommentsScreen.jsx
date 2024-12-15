import {
  Image,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import DefaultImage from "../assets/images/default.jpg";
import InputComment from "../components/InputComment";
import { useState } from "react";

export default function CommentsScreen() {
  const [comment, setComment] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          style={{ ...styles.image, borderWidth: 0 }}
          source={DefaultImage}
        ></Image>
        <InputComment
          inputText={comment}
          handleInputText={setComment}
          placeholder={"Комментувати..."}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
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
