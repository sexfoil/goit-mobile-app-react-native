import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import GeoMarkerIcon from "../components/icons/GeoMarkerIcon";

export default function InputTextField({
  inputText,
  handleInputText,
  placeholder,
  isGeo = false,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <View style={{ ...styles.geo, display: isGeo ? "flex" : "none" }}>
          <GeoMarkerIcon />
        </View>
        <TextInput
          style={[
            styles.text,
            inputText.length > 0 ? styles.fillText : styles.emptyText,
          ]}
          placeholder={placeholder}
          value={inputText}
          onChangeText={(value) => handleInputText(value)}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    flexDirection: "row",
    columnGap: 4,
    alignItems: "center",
  },
  text: {
    width: "100%",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    textAlignVertical: "center",
  },
  fillText: {
    color: "#212121",
  },
  emptyText: {
    color: "#BDBDBD",
  },
  geo: {
    color: "#1B4371",
  },
  container: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
});
