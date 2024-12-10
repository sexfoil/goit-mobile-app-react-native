import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function InputField({
  inputText,
  handleInputText,
  placeholder,
  password = false,
}) {
  const [isFocus, setIsFocus] = useState(false);
  const [isSecured, setIsSecured] = useState(password);
  const [showPass, setShowPass] = useState(password ? "Показати" : "");

  const handleSecured = () => {
    const value = !isSecured;
    setShowPass(value ? "Показати" : "Сховати");
    setIsSecured(value);
  };

  return (
    <View style={[styles.container, isFocus ? styles.onFocus : styles.onBlur]}>
      <View style={styles.input}>
        <TextInput
          style={[
            styles.text,
            inputText.length > 0 ? styles.fillText : styles.emptyText,
          ]}
          placeholder={placeholder}
          autoCapitalize="none"
          secureTextEntry={isSecured}
          value={inputText}
          onChangeText={(value) => handleInputText(value)}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        ></TextInput>
      </View>
      <Text style={[styles.text, styles.extarText]} onPress={handleSecured}>
        {showPass}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
  },
  text: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    textAlignVertical: "center",
    padding: 16,
  },
  fillText: {
    color: "#212121",
  },
  emptyText: {
    color: "#BDBDBD",
  },
  extarText: {
    position: "absolute",
    right: 0,
    color: "#1B4371",
  },
  container: {
    position: "relative",
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
  },
  onFocus: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  },
  onBlur: {
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
});
