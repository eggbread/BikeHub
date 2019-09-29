import React, { Component } from "react";
import { StyleSheet, Image, Text, View, TextInput } from "react-native";
import DatePicker from "react-native-datepicker";
import axios from "axios";
import { Input, Button } from "react-native-elements";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      userPw: "",
      name: "",
      date: ""
    };
  }

  sendUserData = () => {
    if (!(this.state.name && this.state.userId && this.state.userPw)) {
      alert("모두 입력해주세요!");
    } else {
      // axios.post("http://192.168.0.4:8090/user/save",{
      //   name:this.state.userId,
      //   userId:this.state.userId,
      //   userPw:this.state.userPw
      // }).then(res=>{
      //   console.log(res)
      // })
      console.log(this.state);
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
          <View style={styles.thirdRow}>
            <Input
              label="name"
              placeholder="이름을 입력해주세요"
              onChangeText={value => this.setState({ name: value })}
            />
          </View>
          <View style={styles.thirdRow}>
            <Input
              label="ID"
              placeholder="아이디를 입력해주세요"
              onChangeText={value => this.setState({ userId: value })}
            />
          </View>
          <View style={styles.thirdRow}>
            <Input
              label="Password"
              placeholder="비밀번호를 입력해주세요"
              onChangeText={value => this.setState({ userPw: value })}
            />
          </View>
          <View style={styles.thirdRow}>
            <DatePicker
              format="YYYY-MM-DD"
              style={{width:"100%"}}
              placeholder="생년월일을 입력해주세요"
              androidMode="spinner"
              date={this.state.date}
              onDateChange={date => this.setState({ date: date })}
            />
          </View>
          <View style={styles.thirdRow}>
            <Button
              title="회원가입"
              type="outline"
              onPress={this.sendUserData}
            />
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
    flexDirection: "row"
  }
});

export default LoginScreen;
