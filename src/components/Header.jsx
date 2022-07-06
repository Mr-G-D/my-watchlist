import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View>
      <Text style={header.text}>Recommended</Text>
    </View>
  );
};

export default Header;

const header = StyleSheet.create({
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    padding: 20,
    margin: 10,
  },
});
