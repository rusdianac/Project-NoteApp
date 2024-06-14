import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

// Komponen CustomButton untuk digunakan di dalam aplikasi
const CustomButton = ({ backgroundColor, color, text, fontSize, width, onPress }) => (
  <TouchableOpacity style={[styles.button, { backgroundColor, width }]} onPress={onPress}>
    <Text style={[styles.buttonText, { color, fontSize }]}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    fontWeight: "600",
  },
});

export default CustomButton;
