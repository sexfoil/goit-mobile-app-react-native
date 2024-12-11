import { StyleSheet, Text, View } from "react-native";

export default function ButtonMain({ handleSubmit, title, isActive = true }) {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: isActive ? "#FF6C00" : "#F6F6F6",
      }}
    >
      <Text
        onPress={handleSubmit}
        style={{
          ...styles.text,
          color: isActive ? "#FFFFFF" : "#BDBDBD",
        }}
      >
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
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
    borderRadius: 100,
  },
});
