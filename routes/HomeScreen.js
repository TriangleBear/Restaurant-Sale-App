import 'react-native-gesture-handler';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
} from 'react-native'

export function Homebar() {
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

let name1 = "Designer / Front End Developer: Yvette Marionne Medrano";
let name2 = "Back End Developer: Aj Revilla";
let name3 = "Full Stack Developer: Kurt Jayson Zacarias";
export function Aboutbar() {
    return (
        <View>
            <View style={styles.homeTopView}>
                <Text style={[{ color: "white" },
                { fontSize: 30 },
                { fontWeight: "bold" }]}>Waiter's Tablet</Text>
                <Text style={[{ textAlign: "center" },
                { color: "white" },
                { fontSize: 15 },
                { margin: 20 }]}> Our mission is to get orders from the customer and have the waiter collect the lists</Text>

            </View>



            <View style={styles.homeMidView}></View>

            <Text style={[{ color: "black" },
            { fontSize: 30 },
            { fontWeight: "bold" },
            { textAlign: "center" },
            { margin: 20 }]}>The Developers:</Text>

            <View style={{ flexDirection: "row", margin: 5 }}>
                <Image style={styles.aboutImg} source={require('../assets/HomeScreenAssets/yvette.jpeg')} />

                <Text style={styles.aboutText}>{name1}</Text>

            </View>
            <View style={{ flexDirection: "row", margin: 5 }}>

                <Image style={styles.aboutImg} source={require('../assets/HomeScreenAssets/jay.jpg')} />

                <Text style={styles.aboutText}>{name2}</Text>
            </View>
            <View style={{ flexDirection: "row", margin: 5 }}>

                <Image style={styles.aboutImg} source={require('../assets/HomeScreenAssets/kurt.jpg')} />

                <Text style={styles.aboutText}>{name3}</Text>

            </View>
            <Text style={{ fontSize: 5 }}>egg</Text>
        </View>
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

