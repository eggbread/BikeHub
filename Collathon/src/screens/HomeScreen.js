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
        navigator.geolocation.getCurrentPosition(async position => {
          // console.log(position)
            
          var geocode =
            "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            position.coords.latitude +
            "," +
            position.coords.longitude +
            "&key=AIzaSyBgEzBTBpggPy6ouKjcIaKkNHlyAuKZ59Q";
    


          axios.post(geocode, {}).then(myJSONResult => {
            // console.log(myJSONResult.data.results)
            if (myJSONResult.status === 200) {
                myJSONResult=myJSONResult.data
                console.log(myJSONResult.results[0].formatted_address)
                this.setState({
                    location:{
                        name:myJSONResult.results[0].formatted_address,
                        latitude:position.coords.latitude,
                        longitude:position.coords.longitude
                    },
                    isLoad:true
                })
            //   for (var i = 0;i < myJSONResult.results[0].address_components.length;i++) {
            //     if (myJSONResult.results[0].address_components[i].types[0] ==="postal_code") {
            //         console.log(myJSONResult.results[0].address_components[i].long_name)
            //         this.setState({
            //           location: myJSONResult.results[1].formatted_address,
            //           isLoad: true,
            //           postcode:myJSONResult.results[0].address_components[i].long_name.replace("-","")
            //         });
            //       break;
            //     }
            //   }
            }
          });
          console.log("setup");
          console.log(this.state.location)
        });
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
                
                <Button title="출발" onPress={()=>this.props.navigation.navigate("Arrive",{location:this.state.location})}/>
                
                <Button title="도착" onPress={()=>this.props.navigation.navigate("Departure",{location:this.state.location})}/>
                <Button title="지도보기" onPress={()=>this.props.navigation.navigate("Map",{location:this.state.location})}/>

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