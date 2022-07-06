import React from "react";
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Image
        style={styles.image}
        source={{
          uri: "https://i.pravatar.cc/600",
        }}
      />
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    color: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "flex-end",
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 50,
    padding: 20,
    margin: 20,
  },
});
