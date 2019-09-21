import React, { Component } from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import axios from "axios";
import MapView from "react-native-maps";

class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state={
        location:this.props.navigation.state.params.location
    }
  }

  render() {
    return (
    <View style={styles.container}>
        <MapView
            initialRegion={{
                // latitude:this.state.location.latitude,
                // longitude:this.state.location.longitude,
                latitude:37.78825,
                longitude:-122.4324,
                latitudeDelta:0.0922,
                longitudeDelta:0.0421
                
            }}
            style={{
              width:1,
              height:1
            }}
            // showsUserLocation={true}
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

export default MapScreen;
