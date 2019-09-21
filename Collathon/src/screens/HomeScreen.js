import React,{Component} from 'react';
import { StyleSheet, Text, View,Button,ImageBackground } from 'react-native';
import axios from "axios"
import {BallIndicator} from "react-native-indicators"

class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            location:{},
            isLoad:false,

        }
    }

    
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position=>{
            this.setState({
                location:{
                    latitude:position.coords.latitude,
                    longitude:position.coords.longitude
                },
                isLoad:true
            })
        })
        
    }
    render(){
        if(!this.state.isLoad){
            return(
                <View>
                    <BallIndicator
                    color="black"
                    />
                </View>
            )
        }else{

            
            return (
                <ImageBackground 
                style={{width:"100%",height:"100%"}}
                source={require("../../assets/bike.jpg")}
                >
                    
                <Text>바이크 허브!</Text>
                
                <Button title="출발" onPress={()=>this.props.navigation.navigate("Departure",{location:this.state.location})}/>
                
                <Button title="도착" onPress={()=>this.props.navigation.navigate("Arrive",{location:this.state.location})}/>
                <Button title="지도보기" onPress={()=>this.props.navigation.navigate("Map",{location:this.state.location})}/>
                <Button title="로그인" onPress={()=>this.props.navigation.navigate("Login",{location:this.state.location})}/>
                
            </ImageBackground>
        );
    }
        
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

export default HomeScreen;