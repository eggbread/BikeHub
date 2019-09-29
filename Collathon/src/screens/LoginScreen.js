import React, { Component } from "react";
import { StyleSheet, Text, View, Image,  TextInput } from "react-native";
import axios from "axios";
import {Input,Button} from "react-native-elements"
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather'
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      userPw: ""
    };
  }

  sendUserData = () => {
    if (!( this.state.userId && this.state.userPw)) {
      alert("모두 입력해주세요!");
    } else {
      console.log(this.state)
      axios
        .post("http://192.168.0.4:8090/user/login", {
          userId: this.state.userId,
          userPw: this.state.userPw
        })
        .then(res => {
          if(res.status===200){
            console.log(this.props)
            this.props.navigation.navigate("Home",{isLogin:res.data.message}) 
          }
        });
    } 
  };
  render() {
    return (
      <View style={{ width: "100%", height: "100%" }}>
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

              <Input
                placeholder="아이디를 입력해주세요"
                onChangeText={value => this.setState({ userId: value })}
                label="ID"
                leftIcon={<Icon
                  name='user-o'
                  size={24}
                  color='black'
                />}
              />
              </View>
              <View style={styles.thirdRow}>

              <Input
                label="Password"
                placeholder="비밀번호를 입력해주세요"
                onChangeText={value => this.setState({ userPw: value })}
                leftIcon={<Feather
                  name='lock'
                  size={24}
                  color='black'
                />}
                />
                </View>
          </View>
          <View style={styles.secondRow}>
            <View style={styles.thirdRow}>
              <Button title="로그인" buttonStyle={{width:100}} type="outline" onPress={this.sendUserData}/>
              <Button
                title="회원가입"
                buttonStyle={{width:100,marginLeft:20}}
                type="outline"
                onPress={() => this.props.navigation.navigate("Signup")}
              />
              
            </View>
            <View style={styles.thirdRow}></View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
    height: "50%"
  },
  firstRow: {
    flex: 1,
    flexDirection: "column"
  },
  secondRow: {
    flex: 1,
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "black"
  },
  thirdRow: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"row",
   
  },
});

export default LoginScreen;
