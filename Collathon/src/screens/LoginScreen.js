import React,{Component} from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';

class LoginScreen extends Component {
    constructor(props){
        super(props);
        
    }

    
    render(){
  
            return (
                <View style={styles.container}>
                    
                <Text>아이디 : </Text>
                <TextInput placeholder="아이디를 입력해주세요"/>
                <Text>비밀번호 : </Text>
                <TextInput placeholder="비밀번호를 입력해주세요"/>
                <Button title="로그인하기"/>
                <Button title="회원가입하기" onPress={()=>this.props.navigation.navigate("Signup")}/>
            </View>
        );
    
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;