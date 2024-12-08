import { StyleSheet, Text, View } from "react-native";

export default function InputField({ placeholder, extra = "" }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{placeholder}</Text>
      <Text style={[styles.text, styles.extarText]}>{extra}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#BDBDBD",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    padding: 16,
  },
  extarText: {
    color: "#1B4371",
  },
  container: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
});
