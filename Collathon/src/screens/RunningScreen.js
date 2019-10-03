import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import { PacmanIndicator } from "react-native-indicators";

class RunningScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <PacmanIndicator color="black" /> */}
        <Text style={styles.fontStyle}>현재 이용중입니다!{"\n"}{"\n"}</Text>
        <Button
          title="End"
          style={{backgroundColor: "#4EB8CE"}}
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
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#222431",
    alignItems: "center",
    justifyContent: "center"
  },
  fontStyle: {
    fontSize: 20,
    fontFamily: "sunflower",
    color: "white"
  }
});

export default RunningScreen;
