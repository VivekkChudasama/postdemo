import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Post from './Post';
import PostDetails from './PostDetails';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator>
    <Stack.Screen name={'Post'} component={Post} />
    <Stack.Screen name={'PostDetails'} component={PostDetails} />
  </Stack.Navigator>
);

export default Routes;
