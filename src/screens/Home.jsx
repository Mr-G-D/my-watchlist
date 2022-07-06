import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Home = () => {
  return (
    <View>
      <Navbar style={[styles.navbar]} />
      <Header />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  navbar: {
    maxHeight: "20%",
  },
});
