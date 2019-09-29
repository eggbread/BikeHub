import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { PacmanIndicator } from "react-native-indicators";

class RunningScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <PacmanIndicator color="black" />
        <Text>현재 이용중입니다!</Text>
        <Button
          title="End"
          onPress={() =>
            this.props.navigation.navigate("Arrive", { location: {} })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default RunningScreen;
