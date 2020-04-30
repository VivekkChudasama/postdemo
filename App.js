// import 'react-native-gesture-handler';
import React from 'react';
import * as Some from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';
console.disableYellowBox = true;

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    );
  }
}

export default App;