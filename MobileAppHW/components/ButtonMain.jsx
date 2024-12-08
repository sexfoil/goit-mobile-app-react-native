import { StyleSheet, Text, View } from "react-native";

export default function ButtonMain() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Зареєстуватися</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    paddingVertical: 16,
  },
  container: {
    flex: 0,
    marginTop: 43,
    width: "100%",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
});
