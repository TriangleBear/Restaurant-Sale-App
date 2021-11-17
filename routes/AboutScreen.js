import 'react-native-gesture-handler';
import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native'


let name1 = "Designer / Front End Developer: Yvette Marionne Medrano";
let name2 = "Back End Developer: Aj Revilla";
let name3 = "Full Stack Developer: Kurt Jayson Zacarias";
export default function Aboutbar() {
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
    aboutView: {
        flex: 1,
        flexDirection: "row",
    },
    aboutText: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#63cdda',
        fontSize: 27,
        margin: 2,
    },
    aboutImg: {
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "black"
    },
});


/*

    aboutView: {
        flex: 1,
        flexDirection: "row",
    },
    aboutText: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#63cdda',
        fontSize: 27,
        margin: 2,
    },
    aboutImg: {
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "black"
    },
*/