import React, { Component } from "react";
import { StyleSheet, Text, View, Button, ImageBackground,TouchableOpacity } from "react-native";
import axios from "axios";
import MapView,{Marker} from "react-native-maps";
import * as Font from 'expo-font'
class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state={
        location:this.props.navigation.state.params.location?this.props.navigation.state.params.location:this.props.location,
        isFont:false
    }
  }
  async componentDidMount(){
    await Font.loadAsync({
      'sunflower':require("../../assets/Sunflower-Light.ttf")
    }).then(()=>{this.setState({isFont:true})})
  }
  render() {
    console.log(this.props)
    
    return (
    <View>
        <MapView
            initialRegion={{
                latitude:this.state.location.latitude,
                longitude:this.state.location.longitude,
                // latitude:37.78825,
                // longitude:-122.4324,
                latitudeDelta:0.0922,
                longitudeDelta:0.0421
                
            }}
            // initialRegion={{
            //   latitude: 37.78825,
            //   longitude: -122.4324,
            //   latitudeDelta: 0.0922,
            //   longitudeDelta: 0.0421,
            // }}
            style={{
              width:"100%",
              height:"80%"
            }}
            showsUserLocation={true}
        >
          

          <Marker
          coordinate={{
            latitude:this.state.location.latitude,
            longitude:this.state.location.longitude,
            
          }}
          onPress={()=>this.props.navigation.navigate("Departure",{location:this.state.location})}
          />
          
        </MapView>
        <View style={{alignItems:"center",height:"20%",width:"100%",justifyContent:"center"}}>
          {
            this.state.isFont?(
              <Text style={styles.fontStyle}>핀을 터치해서 자전거를 선택하세요!</Text>
              ):null}
        </View>
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
  },
  fontStyle:{
    fontSize:20,
    fontFamily:"sunflower"
  }
});

export default MapScreen;
