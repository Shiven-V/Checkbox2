import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Checkbox } from "react-native-paper";

const MyComponent = () => {
  const [checkedRed, setCheckedRed] = React.useState(false);
  const [checkedGreen, setCheckedGreen] = React.useState(false);
  const [checkedBlue, setCheckedBlue] = React.useState(false);

  return (
    <View>
      <View style={styles.container}>
        <Text>  Netflix:    </Text>
        <View style={[styles.checkBox, { borderColor: "red" }]}>
          <Checkbox
            status={checkedRed ? "checked" : "unchecked"}
            onPress={() => setCheckedRed(!checkedRed)}
            color="white"
          />
        </View>
      </View>

      <View style={styles.container}>
                <Text>   Hulu:      </Text>

        <View style={[styles.checkBox, { borderColor: "green" }]}>
          <Checkbox
            status={checkedGreen ? "checked" : "unchecked"}
            onPress={() => setCheckedGreen(!checkedGreen)}
            color="white"
          />
        </View>
      </View>

      <View style={styles.container}>
                <Text>Disney+:   </Text>

        <View style={[styles.checkBox, { borderColor: "blue" }]}>
          <Checkbox
            status={checkedBlue ? "checked" : "unchecked"}
            onPress={() => setCheckedBlue(!checkedBlue)}
            color="white"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkBox: {
    borderWidth: 3,
    borderRadius: 6,
    padding: 8,
    marginBottom: 20,
    backgroundColor: "black",
  },
  container: {
    flexDirection: "row",
  },
});

export default MyComponent;
