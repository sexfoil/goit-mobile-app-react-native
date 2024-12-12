import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import CameraIcon from "../components/icons/CameraIcon";
import TrashIcon from "../components/icons/TrashIcon";
import ButtonMain from "../components/ButtonMain";
import InputTextField from "../components/InputTextField";

export default function CreatePostsScreen() {
  const [isReady, setIsReady] = useState(false);
  const [postImage, setPostImage] = useState({ img: "src" });
  const [postName, setPostName] = useState("");
  const [postLocation, setPostLocation] = useState("");

  useEffect(() => {
    const value = postImage && postName.length >= 3 && postLocation.length >= 3;
    setIsReady(value);
    console.log(postName, postLocation, postImage);
    console.log(value);
  }, [postName, postLocation, postImage]);

  const handleSubmit = () => {
    if (isReady) {
      console.log("PRESS", isReady);
      setPostName("");
      setPostLocation("");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View onPress={Keyboard.dismiss} style={styles.container}>
        <View style={styles.postArea}>
          <View style={styles.imageArea}>
            <View style={styles.image}>
              <View style={styles.svgBox}>
                <CameraIcon />
              </View>
            </View>
            <Text style={styles.imageName}>Завантажте фото</Text>
          </View>
          <KeyboardAvoidingView
            style={styles.inputArea}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <InputTextField
              inputText={postName}
              handleInputText={setPostName}
              placeholder={"Назва..."}
            />
            <InputTextField
              inputText={postLocation}
              handleInputText={setPostLocation}
              placeholder={"Місцевість..."}
              isGeo={true}
            />
          </KeyboardAvoidingView>
          <ButtonMain
            style={styles.button}
            handleSubmit={handleSubmit}
            title={"Опубліковати"}
            isActive={isReady}
          />
        </View>
        <TrashIcon />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  postArea: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    rowGap: 32,
  },
  imageArea: {
    width: "100%",
  },
  svgBox: {
    justifyContent: "center",
    alignItems: "center",
    padding: 18,
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 240,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
  imageName: {
    width: "100%",
    textAlign: "left",
    color: "#BDBDBD",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  inputArea: {
    rowGap: 16,
  },
  button: {
    backgroundColor: "red",
  },
  container: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 34,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
});
