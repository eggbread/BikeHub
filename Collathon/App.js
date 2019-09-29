import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import ArriveScreen from "./src/screens/ArriveScreen"
import DepartureScreen from "./src/screens/DepartureScreen"
import MapScreen from "./src/screens/MapScreen"
import LoginScreen from "./src/screens/LoginScreen"
import SignupScreen from "./src/screens/SignupScreen"
import RunningScreen from "./src/screens/RunningScreen"
import {createBottomTabNavigator,BottomTabBar} from "react-navigation-tabs"
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs"
 const TabBarComponent =props=>(
  <BottomTabBar {...props}/>
)

const navigator = createStackNavigator(
  {
    Home:HomeScreen,
    Arrive:ArriveScreen,
    Departure:DepartureScreen,
    Map:MapScreen, 
    Login:LoginScreen,
    Signup:SignupScreen,
    Running:RunningScreen
  },
  {
    headerMode:"none",
    
    initialRouteName:'Home',
    defaultNavigationOptions:{
      title:'BikeHub',
      
    }
  }
)
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
export default createAppContainer(navigator);