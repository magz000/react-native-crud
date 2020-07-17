
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Routes from './Routes.js'

class App extends Component {
   render() {
      return (
         <Routes />
      )
   }
}

export default App
AppRegistry.registerComponent('App', () => App)


// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start Test on your app!</Text>
//       <StatusBar style="auto" />
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
