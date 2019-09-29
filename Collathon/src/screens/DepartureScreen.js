import React,{Component} from 'react';
import { StyleSheet, Text, View,Button,AppRegistry } from 'react-native';
import {RNCamera} from "react-native-camera"
class DepartureScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            supported:true
        }
    }

    componentDidMount(){
        
    }
    takePicture = async() => {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options);
          console.log(data.uri);
        }
      };
    render(){
  
            return (
                <View style={styles.container}>
                    <RNCamera
                     
                     ref={ref => {
                        this.camera=ref;
                      }}
                    //   style={styles.preview}
                      type={RNCamera.Constants.Type.back}
                      flashMode={RNCamera.Constants.FlashMode.on}
                      androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                      }}
                      androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                      }}
                      onGoogleVisionBarcodesDetected={({ barcodes }) => {
                        console.log(barcodes);
                      }}
                    />
                <Text>근처 자전거의 NFC를 태그해주세요!</Text>
                <Button onPress={this.takePicture.bind(this)} title="take"/>
                <Button title="Start" onPress={()=>this.props.navigation.navigate("Running")}/>
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

export default DepartureScreen;