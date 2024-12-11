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
import AvatarBox from "../components/AvatarBox";
import { useNavigation } from "@react-navigation/native";

export default function RegistrationScreen() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleSubmit = () => {
    if (!login && !email && !password) {
      alert("Login, Email and Password must not be empty!");
    } else {
      alert(`Registered: email='${email}', password='${password}'`);
    }
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.background}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.panel}>
          <AvatarBox />
          <Text style={styles.titleText}>Реєстрація</Text>
          <KeyboardAvoidingView
            style={styles.inputBlock}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <InputField
              inputText={login}
              handleInputText={setLogin}
              placeholder={"Логін"}
            />
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
          <ButtonMain handleSubmit={handleSubmit} title={"Зареєстуватися"} />
          <Text style={styles.helpText}>
            Вже є акаунт?{" "}
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("Login")}
            >
              Увійти
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
    height: "67%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  titleText: {
    marginTop: 92,
    marginBottom: 32,
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    color: "#212121",
    letterSpacing: 0.3,
    textAlign: "center",
  },
  helpText: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
    textAlign: "center",
  },
  link: {
    textDecorationLine: "underline",
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
