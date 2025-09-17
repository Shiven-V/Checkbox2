import React from "react";
import { StyleSheet, View } from "react-native";
import MyComponent from "./components/MyComponent";

export default function Index() {
  return (
      <View style={styles.container}>
        <MyComponent />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 20,
    height: 20,
  },
});