import React, { Component } from "react";
import { StyleSheet,Vibration, Text, View, Button, AppRegistry } from "react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import axios from "axios"
import { BarCodeScanner } from "expo-barcode-scanner";

class DepartureScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      scanned: false,
      bikeNum:0,
      user:this.props.navigation.state.params.user
    };
  }

  async componentDidMount() {

    this.getPermissiongsAsync();
  }
  getPermissiongsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  };
  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true});
    Vibration.vibrate(500)
    axios.get("http://192.168.0.2:8090/bicycle/rent",{
      params:{
        bicycleNumber:data,
        userId:this.state.user
      }
    }).then(res=>{
      console.log(res.data)
    })
  };
  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.fontStyle}>근처 자전거의 QR코드를 찍어주세요!</Text>
        <BarCodeScanner
          style={{width:"100%",height:"80%"}}
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        />

        <Button
          title="Start"
          onPress={() => this.props.navigation.navigate("Running")}
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
    justifyContent: "center",
    backgroundColor:"#303144"
  },
  fontStyle:{
    color:"white" 
  }
});

export default DepartureScreen;
