import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Navbar from "./src/components/Navbar";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Navbar style={[styles.navbar]} />
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  navbar: {
    maxHeight: "20%",
  },
});
