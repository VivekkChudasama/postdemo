import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Post from './Post';
import PostDetails from './PostDetails';
import JsonData from './JsonData';

const Stack = createStackNavigator();
const Routes = () => (
  <Stack.Navigator>
    <Stack.Screen name={'Post'} component={Post} />
    <Stack.Screen name={'PostDetails'} component={PostDetails} />
    <Stack.Screen name="JsonData" component={JsonData} options={{ title: 'JSON', }} />
  </Stack.Navigator>
);

export default Routes;
