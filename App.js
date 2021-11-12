import 'react-native-gesture-handler';
import React from 'react';
import { Button, View, Alert, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from './routes/SplashScreen';
import HomeScreen from './routes/HomeScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App(){
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* Splash Screen --- this is a comment */}
        <Stack.Screen 
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        {/* Login Screen --- this is a comment */}
        <Stack.Screen 
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const quantity = {
  color: "white",
  fontWeight:"bold",
  padding:"9px",
  backgroundColor: "#5F9EA0",
  fontFamily: "Arial"
};