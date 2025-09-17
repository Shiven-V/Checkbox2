import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider as PaperProvider } from 'react-native-paper';
import MyComponent from "./components/MyComponent";

export default function Index() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <MyComponent />
      </View>
    </PaperProvider>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
