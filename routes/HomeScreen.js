import 'react-native-gesture-handler';
import React from 'react';
import { View, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    SafeAreaView, 
    ScrollView, 
    Image, 
    ImageBackground, 
    Alert } from 'react-native';
 
export function Homebar() {

    return (
        <ImageBackground style={styles.homeBG} source={require('./HomeScreenAssets/Home_Image.jpg')}>
            <View style={styles.container}>

                <Image style={styles.homeImage}
                    source={require('./HomeScreenAssets/Waiter_Logo.png')}
                />
                <Text
                    style={styles.homeText}> Waiter's Tablet</Text>
            </View>
        </ImageBackground>
    );
}
export function FoodMenubar() {
    return (
        <SafeAreaView>
            <ScrollView>
                {/* Header */}
                <Text style={styles.orderTextHeader}>Sinigang</Text>
                {/* pork */}
                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>pork: 315</Text>
                    <TouchableOpacity
                        title='porkSinBtn'
                        style={styles.buttonOrderPanelgreen}
                        onPress={() => Alert.alert('Added Sinigang na Baboy') }>{/* */}
                        <Text style={{ fontSize: 25 }}>Order</Text>
                    </TouchableOpacity>
                </View>

                {/* fish */}
                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>fish: 345</Text>
                    <TouchableOpacity
                        style={styles.buttonOrderPanelgreen}
                        onPress={() => Alert.alert('Added Sinigang na Isda')}>
                        <Text style={{ fontSize: 25 }}>Order</Text>
                    </TouchableOpacity>
                </View>

                {/* prawn */}
                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>prawn: 395</Text>
                    <TouchableOpacity
                        style={styles.buttonOrderPanelgreen}
                        onPress={() => Alert.alert('Added Sinigang na Hipon')}>
                        <Text style={{ fontSize: 25 }}>Order</Text>
                    </TouchableOpacity>
                </View>

                {/* Header */}
                <Text style={styles.orderTextHeader}>Adobo</Text>
                {/* pork adobo */}
                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>pork: 315</Text>
                    <TouchableOpacity
                        style={styles.buttonOrderPanelgreen}
                        onPress={() => Alert.alert('Added Pork Adobo')}>
                        <Text style={{ fontSize: 25 }}>Order</Text>
                    </TouchableOpacity>
                </View>

                {/* chicken adobo */}
                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>chicken: 315</Text>
                    <TouchableOpacity
                        style={styles.buttonOrderPanelgreen}
                        onPress={() => Alert.alert('Added Chicken Adobo')}>
                        <Text style={{ fontSize: 25 }}>Order</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.orderTextHeader}></Text>
                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Tinolang Manok: 315</Text>
                    <TouchableOpacity
                        style={styles.buttonOrderPanelgreen}
                        onPress={() => Alert.alert('Added Tinolang Manok')}>
                        <Text style={{ fontSize: 25 }}>Order</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Bulalo Soup: 395</Text>
                    <TouchableOpacity
                        style={styles.buttonOrderPanelgreen}
                        onPress={() => Alert.alert('Added Bulalo Soup')}>
                        <Text style={{ fontSize: 25 }}>Order</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Crispy Pata: 595</Text>
                    <TouchableOpacity
                        style={styles.buttonOrderPanelgreen}
                        onPress={() => Alert.alert('Added Cripy Pata')}>
                        <Text style={{ fontSize: 25 }}>Order</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Pancit Canton: 195</Text>
                    <TouchableOpacity
                        style={styles.buttonOrderPanelgreen}
                        onPress={() => Alert.alert('Added Pancit Canton')}>
                        <Text style={{ fontSize: 25 }}>Order</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Pancit Bihon: 195</Text>
                    <TouchableOpacity
                        style={styles.buttonOrderPanelgreen}
                        onPress={() => Alert.alert('Added Pancit Bihon')}>
                        <Text style={{ fontSize: 25 }}>Order</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Bicol Express: 315</Text>
                    <TouchableOpacity
                        style={styles.buttonOrderPanelgreen}
                        onPress={() => Alert.alert('Added Bicol Express')}>
                        <Text style={{ fontSize: 25 }}>Order</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Bistik Tagalog: 315</Text>
                    <TouchableOpacity
                        style={styles.buttonOrderPanelgreen}
                        onPress={() => Alert.alert('Added Bistik Tagalog')}>
                        <Text style={{ fontSize: 25 }}>Order</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Rice: 50</Text>
                    <TouchableOpacity
                        style={styles.buttonOrderPanelgreen}
                        onPress={() => Alert.alert('Added Rice')}>
                        <Text style={{ fontSize: 25 }}>Order</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.orderTextHeader}>Drinks</Text>
                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Sarsi 1.5: 60</Text>
                    <TouchableOpacity
                        style={styles.buttonOrderPanelgreen}
                        onPress={() => Alert.alert('Added Sarsi 1.5')}>
                        <Text style={{ fontSize: 25 }}>Order</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Royal 1.5: 60</Text>
                    <TouchableOpacity
                        style={styles.buttonOrderPanelgreen}
                        onPress={() => Alert.alert('Added Royal 1.5')}>
                        <Text style={{ fontSize: 25 }}>Order</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Coke 1.5: 60</Text>
                    <TouchableOpacity
                        style={styles.buttonOrderPanelgreen}
                        onPress={() => Alert.alert('Added Coke 1.5')}>
                        <Text style={{ fontSize: 25 }}>Order</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Sprite 1.5: 60</Text>
                    <TouchableOpacity
                        style={styles.buttonOrderPanelgreen}
                        onPress={() => Alert.alert('Added Sprite 1.5')}>
                        <Text style={{ fontSize: 25 }}>Order</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Ice Tea: 55</Text>
                    <TouchableOpacity
                        style={styles.buttonOrderPanelgreen}
                        onPress={() => Alert.alert('Added Ice Tea Jag')}>
                        <Text style={{ fontSize: 25 }}>Order</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Pineapple Juice: 55</Text>
                    <TouchableOpacity
                        style={styles.buttonOrderPanelgreen}
                        onPress={() => Alert.alert('Added Pineapple Juice Jag')}>
                        <Text style={{ fontSize: 25 }}>Order</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export function Orderbar() {
    return (
        <View style={styles.homeText}>
            <Text style={{ fontSize: 45 }}>
                Order
            </Text>
        </View>
    );
}
export function Activitybar() {
    return (
        <View style={styles.homeText}>
            <Text style={{ fontSize: 45 }}>
                Activity
            </Text>
        </View>
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
                <Image style={styles.aboutImg} source={require('./HomeScreenAssets/yvette.jpeg')} />

                <Text style={styles.aboutText}>{name1}</Text>

            </View>
            <View style={{ flexDirection: "row", margin: 5 }}>

                <Image style={styles.aboutImg} source={require('./HomeScreenAssets/jay.jpg')} />

                <Text style={styles.aboutText}>{name2}</Text>
            </View>
            <View style={{ flexDirection: "row", margin: 5 }}>

                <Image style={styles.aboutImg} source={require('./HomeScreenAssets/kurt.jpg')} />

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
    orderTextHeader: {
        backgroundColor: '#5499C7',
        alignItems: 'center',
        fontSize: 45
    },
    orderText: {
        flex: 1,
        fontSize: 25,
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    orderPanel: {
        backgroundColor: '#2471A3',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonOrderPanelgreen: {
        backgroundColor: 'green',
        marginTop: 10,
        paddingHorizontal: 15
    },
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

