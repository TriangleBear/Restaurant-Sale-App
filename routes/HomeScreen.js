import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView, ScrollView, Image, Alert} from 'react-native';

export function Homebar(){
    return(
        <View style={styles.homeText}>
            <Text style={{fontSize: 45}}>
                Home
            </Text>
        </View>
    );
}
export function FoodMenubar(){
    return(
        <SafeAreaView style={styles.orderText}>
            <ScrollView>
            <Text style={{fontSize: 25}}>
                Adobo: Php 60
            </Text>
            <Image
                source={require('./HomeScreenAssets/Pork-Adobo-3.jpg')}
            />
            <Button
                title="Order"
                onPress={()=>Alert.alert('Added Adobo')}
            />
            <Text style={{fontSize: 25}}>
                Chopsuey: Php 40
            </Text>
            <Image
                source={require('./HomeScreenAssets/chop-suey.jpg')}
            />
            <Button
                title="Order"
                onPress={()=>Alert.alert('Added Chopsuey')}
            />
            <Text style={{fontSize: 25}}>
                Nilagang Baka: Php 100
            </Text>
            <Image
                source={require('./HomeScreenAssets/nilagang-baka.jpg')}
            />
            <Button
                title="Order"
                onPress={()=>Alert.alert('Added Chosuey')}
            />
            </ScrollView>
        </SafeAreaView>
    );
}
export function Orderbar(){
    return(
        <View style={styles.homeText}>
            <Text style={{fontSize: 45}}>
                Order
            </Text>
        </View>
    );
}
export function Aboutbar(){
    return(
        <View style={styles.homeText}>
            <Text style={{fontSize: 25}}>
                Designer: Yevette Marionne Medrano
            </Text>
            <Text style={{fontSize: 25}}>
                Developer: Aj Revilla
            </Text>
            <Text style={{fontSize: 25}}>
                Full Stack: Kurt Jayson Zacarias
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    homeText: {
        flex: 1,
        backgroundColor: '#3498DB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    orderText: {
        flex: 1,
        backgroundColor: '#3498DB',
    },
});

