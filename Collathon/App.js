import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import ArriveScreen from "./src/screens/ArriveScreen"
import DepartureScreen from "./src/screens/DepartureScreen"
import MapScreen from "./src/screens/MapScreen"

const navigator = createStackNavigator(
  {
    Home:HomeScreen,
    Arrive:ArriveScreen,
    Departure:DepartureScreen,
    Map:MapScreen
  },
  {
    initialRouteName:'Home',
    defaultNavigationOptions:{
      title:'BikeHub'
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