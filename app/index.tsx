import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from 'react-native-paper';
import MyComponent from "./components/MyComponent";

export default function Index() {
  return (
    <PaperProvider>
      <Text style={styles.titleText}>Which of the following do you own?</Text>
      <View style={styles.container}>
        <MyComponent />
      </View>
    </PaperProvider>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 150,
  },
  titleText:{
    fontSize: 25,
    marginTop: 150,
    padding: 10,
    fontFamily: 'Times New Roman', 
  }
});
