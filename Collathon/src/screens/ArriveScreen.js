import React,{Component} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {SkypeIndicator} from "react-native-indicators"
import axios from "axios"
import {BallIndicator} from "react-native-indicators"


class ArriveScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            location:this.props.navigation.state.params.location,
            isLoad:false
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
                <View style={styles.container}>
                
                    <Text>현재 위치 : {this.state.location.name}</Text>
                    <Text>반납하시겠습니까??</Text>
                    

                    <Button title="YES"/>
                    
                    <Button title="NO" onPress={()=>this.props.navigation.navigate("Running")}/>
                </View>
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
   

export default ArriveScreen;