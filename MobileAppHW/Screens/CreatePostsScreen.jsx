import { StyleSheet, Text, View } from "react-native";
import TrashIcon from "../components/icons/TrashIcon";
import ButtonMain from "../components/ButtonMain";
import { useState } from "react";
import InputField from "../components/InputField";

export default function CreatePostsScreen() {
  const [isReady, setIsReady] = useState(false);

  const handleSubmit = () => {
    console.log("PRESS", isReady);
    setIsReady(!isReady);
  };

  return (
    <View style={styles.container}>
      <View style={styles.postArea}>
        <View style={styles.imageArea}>
          <View style={styles.image}></View>
          <Text style={styles.imageName}>Завантажте фото</Text>
        </View>
        <View style={styles.inputArea}>
          <InputField
            inputText={""}
            handleInputText={() => {}}
            placeholder={"Назва..."}
          />
          <InputField
            inputText={""}
            handleInputText={() => {}}
            placeholder={"Місцевість..."}
          />
        </View>
        <ButtonMain
          style={styles.button}
          handleSubmit={handleSubmit}
          title={"Опубліковати"}
          isActive={isReady}
        />
      </View>
      <TrashIcon />
    </View>
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
  image: {
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
