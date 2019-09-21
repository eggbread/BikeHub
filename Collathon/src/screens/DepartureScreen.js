import React,{Component} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            location:this.props.navigation.state.params.location,
            isLoad:false
        }
    }

    render(){
        
            
            return (
                <View style={styles.container}>
                
                    <Text>현재 위치 : {this.state.location.name}</Text>
                    <Text>반납하시겠습니까??</Text>
                    

                    <Button title="YES"/>
                    
                    <Button title="NO"/>
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

export default HomeScreen;