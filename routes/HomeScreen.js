import 'react-native-gesture-handler';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
} from 'react-native'

export default function Homebar() {
    return (
        <ImageBackground style={styles.homeBG} source={require('../assets/HomeScreenAssets/Home_Image.jpg')}>
            <View style={styles.container}>

                <Image style={styles.homeImage}
                    source={require('../assets/HomeScreenAssets/Waiter_Logo.png')}
                />
                <Text
                    style={styles.homeText}> Waiter's Tablet</Text>
            </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    homeBG: {
        height: "100%",
        width: "100%",
    },
    homeTopView: {
        height: "25%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#63cdda',
    },
    homeMidView: {
        height: "3%",
        backgroundColor: 'black',
    },
    homeText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
        fontSize: 50,
    },
    homeImage: {
        height: 300,
        width: 300,
        alignSelf: "center",
        margin: 100,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "black",
        backgroundColor: "#34ace0",
    },
});

