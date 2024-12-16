import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useState } from "react";
import BackgroundImage from "../assets/images/background.png";
import ButtonMain from "../components/ButtonMain";
import InputField from "../components/InputField";
import { useNavigation, useRoute } from "@react-navigation/native";
import { login } from "../utils/auth";
import { useDispatch } from "react-redux";

export default function LoginScreen() {
  const [email, setEmail] = useState("sly@gmail.com");
  const [password, setPassword] = useState("qwerty123");
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email && !password) {
      alert("Email and Password must not be empty!");
      return;
    }
    try {
      await login({ email, password }, dispatch);
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.background}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.panel}>
          <Text style={styles.titleText}>Увійти</Text>
          <KeyboardAvoidingView
            style={styles.inputBlock}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <InputField
              inputText={email}
              handleInputText={setEmail}
              placeholder={"Адреса електронної пошти"}
            />
            <InputField
              inputText={password}
              handleInputText={setPassword}
              placeholder={"Пароль"}
              password={true}
              extra={"Показати"}
            />
          </KeyboardAvoidingView>
          <ButtonMain handleSubmit={handleLogin} title={"Увійти"} />
          <Text style={styles.helpText}>
            Немає акаунту?{" "}
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("Registration")}
            >
              Зареєструватися
            </Text>
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  inputBlock: {
    gap: 16,
    justifyContent: "space-between",
  },
  panel: {
    position: "relative",
    flex: 0,
    backgroundColor: "#FFFFFF",
    height: "60%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  titleText: {
    marginVertical: 32,
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    color: "#212121",
    letterSpacing: 0.3,
    textAlign: "center",
  },
  link: {
    textDecorationLine: "underline",
  },
  helpText: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
    textAlign: "center",
  },
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
});
