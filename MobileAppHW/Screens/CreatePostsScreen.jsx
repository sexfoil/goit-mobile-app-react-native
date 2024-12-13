import {
  Button,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import CameraIcon from "../components/icons/CameraIcon";
import TrashIcon from "../components/icons/TrashIcon";
import ButtonMain from "../components/ButtonMain";
import InputTextField from "../components/InputTextField";
import DefaultImage from "../assets/images/default.jpg";

export default function CreatePostsScreen() {
  const [permissionCamera, requestCameraPermission] = useCameraPermissions();
  const camera = useRef();
  const [isReady, setIsReady] = useState(false);
  const [postImage, setPostImage] = useState("");
  const [postName, setPostName] = useState("");
  const [postLocation, setPostLocation] = useState("");
  const [permissionMediaLibrary, requestMediaLibraryPermission] =
    MediaLibrary.usePermissions();

  useEffect(() => {
    const value = postImage && postName.length >= 3 && postLocation.length >= 3;
    setIsReady(value);
  }, [postName, postLocation, postImage]);

  const takePicture = async () => {
    if (!camera) {
      return;
    }
    const { uri } = await camera.current.takePictureAsync();
    setPostImage(uri);
    await MediaLibrary.createAssetAsync(uri);
  };

  const handlePicture = () => {
    setPostImage("");
  };

  const handleSubmit = () => {
    if (isReady) {
      console.log("PRESS", isReady);
    }
  };

  const handleDelete = () => {
    setPostName("");
    setPostLocation("");
    setPostImage("");
  };

  const requestPermission = async () => {
    await requestCameraPermission();
    await requestMediaLibraryPermission();
  };

  if (!permissionCamera) {
    return <View />;
  }

  if (!permissionCamera.granted) {
    return (
      <View style={styles.container}>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View onPress={Keyboard.dismiss} style={styles.container}>
        <View style={styles.postArea}>
          <View style={styles.imageArea}>
            {postImage ? (
              <Image
                style={{ ...styles.image, borderWidth: 0 }}
                source={DefaultImage}
              ></Image>
            ) : (
              <CameraView
                ref={camera}
                style={{ ...styles.image, borderWidth: 1 }}
                facing="back"
              >
                <TouchableOpacity style={styles.svgBox} onPress={takePicture}>
                  <CameraIcon />
                </TouchableOpacity>
              </CameraView>
            )}
            <Text
              style={{
                ...styles.imageName,
                color: postImage ? "#FF6C00" : "#BDBDBD",
              }}
              onPress={handlePicture}
            >
              {postImage ? "Редагувати фото" : "Завантажте фото"}
            </Text>
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
        <TouchableOpacity onPress={handleDelete}>
          <TrashIcon />
        </TouchableOpacity>
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
    // backgroundColor: "#F6F6F6",
  },
  imageName: {
    width: "100%",
    textAlign: "left",
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
