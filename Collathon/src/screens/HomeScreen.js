import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import axios from "axios";
import { 
  DotIndicator,
 } from "react-native-indicators";
 import * as Font from 'expo-font'

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      isLoad: false,
      isLogin: {userid:3,use:-1}
    };
  }
  async componentDidMount(){
    await Font.loadAsync({
      'sunflower':require("../../assets/Sunflower-Light.ttf")
    }).then(()=>{this.setState({isFont:true})})
  }
  componentWillMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        location: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        },
        isLoad: true
      });
    });
  }
  componentWillReceiveProps(next) {
    this.setState({
      isLogin: next
    });
  }
  render() {
    if (!this.state.isLoad) {
      return (
        <View style={styles.logo}>
          <DotIndicator color="black" />
        </View>
      );
    } else {
      var login;
      if (!this.state.isLogin) {
        login = (
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("Login", {
                location: this.state.location
              })
            }
          >
            <Image
              source={require("../../assets/login.png")}
              style={{ width: 100, height: 100 }}
            />
          </TouchableOpacity>
        );
      } else {
        login = (
          <TouchableOpacity onPress={() => this.setState({ isLogin: false })}>
            <Image
              source={require("../../assets/logout.png")}
              style={{ width: 100, height: 100 }}
            />
          </TouchableOpacity>
        );
      }

      return (
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          // source={require("../../assets/bike.jpg")}
        >
          <View style={styles.logo}>
            <Image
              source={require("../../assets/logo.png")}
              style={{
                width: 300,
                height: 300,
                borderWidth: 1,
                borderColor: "black"
              }}
            />
          </View>
          <View style={styles.firstRow}>
            <View style={styles.secondRow}>
              <View style={styles.thirdRow}>
                <TouchableOpacity
                  onPress={() =>{
                    if(!this.state.isLogin){
                      alert("로그인을 먼저 해주세요")
                    }else{
                      if(this.state.isLogin.use===-1){
                      this.props.navigation.navigate("Departure", {
                        location: this.state.location,
                        user:this.state.isLogin
                      })
                    }else{
                      this.props.navigation.navigate("Running", {
                        user:this.state.isLogin
                      })
                    }
                    }
                  }}
                >
                  <Image
                    source={require("../../assets/departure.png")}
                    style={{ width: 100, height: 100 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.thirdRow}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("Arrive", {
                      location: this.state.location
                    })
                  }
                >
                  <Image
                    source={require("../../assets/arrive.png")}
                    style={{ width: 100, height: 100 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.secondRow}>
              <View style={styles.thirdRow}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("Map", {
                      location: this.state.location
                    })
                  }
                >
                  <Image
                    source={require("../../assets/map.png")}
                    style={{ width: 100, height: 100 }}
                  />
                </TouchableOpacity>
              </View>
              {/* <Button title="도착" onPress={()=>this.props.navigation.navigate("Arrive",{location:this.state.location})}/> */}
              {/* <Button title="지도보기" onPress={()=>this.props.navigation.navigate("Map",{location:this.state.location})}/> */}
              <View style={styles.thirdRow}>{login}</View>
            </View>
          </View>
        </ImageBackground>
      );
    }
  }
}

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black"
  },
  firstRow: {
    flex: 1,
    flexDirection: "column"
  },
  secondRow: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black"
  },
  thirdRow: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default HomeScreen;
