import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import PublishCommentIcon from "./icons/PublishCommentIcon";
import { useSelector } from "react-redux";
import { addPost } from "../utils/firestore";

export default function InputComment({
  inputText,
  handleInputText,
  handleAddComment,
  placeholder,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          style={[
            styles.text,
            inputText.length > 0 ? styles.fillText : styles.emptyText,
          ]}
          placeholder={placeholder}
          value={inputText}
          onChangeText={(value) => handleInputText(value)}
        ></TextInput>
        <TouchableOpacity onPress={handleAddComment}>
          <View style={styles.publish}>
            <PublishCommentIcon />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  publish: {
    right: 0,
  },
  input: {
    width: "100%",
    flexDirection: "row",
    columnGap: 4,
    alignItems: "center",
  },
  text: {
    width: "100%",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    textAlignVertical: "center",
  },
  fillText: {
    color: "#212121",
  },
  emptyText: {
    color: "#BDBDBD",
  },
  container: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
  },
});
