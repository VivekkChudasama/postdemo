// import 'react-native-gesture-handler';
import React, {useEffect } from 'react';
import * as Some from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';
import {Root} from 'native-base';
console.disableYellowBox = true;

class App extends React.Component {
  
  render() {
    return (
      <Root>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </Root>
    );
  }
}

export default App;