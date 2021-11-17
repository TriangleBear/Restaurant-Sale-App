import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, AppRegistry} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Homebar from './routes/HomeScreen';
import FoodMenubar from './routes/FoodMenuScreen';
import OrderScreen from  './routes/OrderScreen';
import BillingScreen from  './routes/BillingScreen';
import Aboutbar from './routes/AboutScreen';
import CSideBar from './routes/functions/CSideBar';



const Drawer = createDrawerNavigator();

export default App=()=>{
  return (
    <NavigationContainer>
      
      <Drawer.Navigator initialRouteName="HomeScreen"
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 5},
      }}
      drawerContent={(props) => <CSideBar {...props} />}>
        
        {/* HomeScreen --- this is a comment */}
        <Drawer.Screen name="Home" component={Homebar}
          options={{
            drawerIcon: ({ size }) => (
              <Image
                source={require('./assets/icons8-home-24.png')}
                style={{ height: size, }}
              />
            ),
          }}
        />
        <Drawer.Screen name="Food Menu" component={FoodMenubar}
          options={{
            drawerIcon: ({ size }) => (
              <Image
                source={require('./assets/icons8-gallery-24.png')}
                style={{ height: size, }}
              />
            ),
          }}
        />
        <Drawer.Screen name="Order" component={OrderScreen}
          options={{
            drawerIcon: ({ size }) => (
              <Image
                source={require('./assets/icons8-contact-24.png')}
                style={{ height: size, }}
              />
            ),
          }}
        />
        <Drawer.Screen name="Billing" component={BillingScreen}
          options={{
            drawerIcon: ({ size }) => (
              <Image
                source={require('./assets/icons8-services-24.png')}
                style={{ height: size, }}
              />
            ),
          }}
        />
        <Drawer.Screen name="About" component={Aboutbar}
          options={{
            drawerIcon: ({ size }) => (
              <Image
                source={require('./assets/icons8-about-24.png')}
                style={{ height: size, }}
              />
            ),
          }}
        />
      </Drawer.Navigator>
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
AppRegistry.registerComponent('App', () => App);