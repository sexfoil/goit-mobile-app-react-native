import { ImageBackground, StyleSheet, Text, View } from "react-native";
import BackgroundImage from "../assets/background.png";
import ButtonMain from "../components/ButtonMain";
import InputField from "../components/InputField";
import AvatarBox from "../components/AvatarBox";

export default function RegistrationScreen() {
  return (
    <ImageBackground source={BackgroundImage} style={styles.background}>
      <View style={styles.inputPanel}>
        <AvatarBox />
        <Text style={styles.titleText}>Реєстрація</Text>
        <InputField placeholder={"Логін"} />
        <InputField placeholder={"Адреса електронної пошти"} />
        <InputField placeholder={"Пароль"} extra={"Показати"} />
        <ButtonMain />
        <Text style={styles.helpText}>Вже є акаунт? Увійти</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  inputPanel: {
    position: "relative",
    flex: 0,
    backgroundColor: "#FFFFFF",
    height: "67%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "flex-start",
    alignItems: "center",
    rowGap: 16,
    paddingHorizontal: 16,
  },
  titleText: {
    marginTop: 92,
    marginBottom: 32,
    fontSize: 30,
    fontWeight: "500",
    color: "#212121",
    letterSpacing: 0.3,
    textAlign: "center",
  },
  helpText: {
    fontSize: 16,
    fontWeight: "400",
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
