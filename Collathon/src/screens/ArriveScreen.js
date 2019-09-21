import React,{Component} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {SkypeIndicator} from "react-native-indicators"


class ArriveScreen extends Component {
    constructor(props){
        super(props);
        
    }

    
    render(){
  
            return (
                <View style={styles.container}>
                    <SkypeIndicator color="black"/>
                <Text>근처 자전거의 NFC를 태그해주세요!</Text>
                
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

export default ArriveScreen;