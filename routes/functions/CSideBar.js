import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

export const CSideBar = (props) => {
  const BASE_PATH =
    'https://i.imgur.com/';
  const proileImage = 'NwwfZ1L.png';
  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      <View style={[styles.topView]}></View>
      <Image
        source={{uri: BASE_PATH + proileImage}}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey'
        }}>
        by JYK App Solutions
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topView:{
    padding:16,
    paddingTop:80,
    backgroundColor: '#63cdda'
 },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    position: 'absolute'
  },
  iconStyle: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CSideBar;