import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from './routes/SplashScreen';
import HomeScreen from './routes/HomeScreen';


const Stack = createStackNavigator();

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