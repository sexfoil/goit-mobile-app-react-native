import { StyleSheet, Text, View } from "react-native";

export default function ButtonMain({ handleSubmit }) {
  return (
    <View style={styles.container}>
      <Text onPress={handleSubmit} style={styles.text}>
        Зареєстуватися
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    paddingVertical: 16,
  },
  container: {
    flex: 0,
    marginTop: 43,
    marginBottom: 16,
    width: "100%",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
});
