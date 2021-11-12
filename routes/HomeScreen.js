import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = () => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'stretch', padding: "10px" }}>
      <Text style ={styles.homeText}>Waiter :</Text>
      <Text style ={styles.homeText}>Insert Name Here</Text>
      </View>
    )
};

export default HomeScreen;

const styles = StyleSheet.create({
    homeText: {
        flex: 1,
        backgroundColor: '#F5B041',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

