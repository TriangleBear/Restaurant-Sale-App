import * as React from 'react';
import { View, 
    Text,
    StyleSheet, 
    SafeAreaView, 
    ScrollView, 
    Alert } from 'react-native'
import { Divider } from 'react-native-paper';
import OrderButton from './components/OrderButton';

export default function FoodMenubar() {
    return (
        <SafeAreaView >
            <ScrollView >
                {/* Header */}
                <Text style={styles.orderTextHeader}>Sinigang</Text>
                <Divider />
                {/* pork */}
                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Pork: 315</Text>
                    <OrderButton
                        onPress={() => Alert.alert('Added Sinigang na Baboy') }/>
                </View>

                {/* fish */}
                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Fish: 345</Text>
                    <OrderButton
                        onPress={() => Alert.alert('Added Sinigang na Isda')}/>
                </View>

                {/* prawn */}
                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Prawn: 395</Text>
                    <OrderButton
                        onPress={() => Alert.alert('Added Sinigang na Hipon')}/>
                </View>

                {/* Header */}
                <Text style={styles.orderTextHeader}>Adobo</Text>
                <Divider />
                {/* pork adobo */}
                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Pork: 315</Text>
                    <OrderButton
                        onPress={() => Alert.alert('Added Pork Adobo')}/>
                </View>

                {/* chicken adobo */}
                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Chicken: 315</Text>
                    <OrderButton
                        onPress={() => Alert.alert('Added Chicken Adobo')}/>
                </View>

                <Text style={styles.orderTextHeader}> Others </Text>
                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Tinolang Manok: 315</Text>
                    <OrderButton
                        onPress={() => Alert.alert('Added Tinolang Manok')}/>
                </View>

                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Bulalo Soup: 395</Text>
                    <OrderButton
                        onPress={() => Alert.alert('Added Bulalo Soup')}/>
                </View>

                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Crispy Pata: 595</Text>
                    <OrderButton
                        onPress={() => Alert.alert('Added Cripy Pata')}/>
                </View>

                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Pancit Canton: 195</Text>
                    <OrderButton
                        onPress={() => Alert.alert('Added Pancit Canton')}/>
                </View>

                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Pancit Bihon: 195</Text>
                    <OrderButton
                        onPress={() => Alert.alert('Added Pancit Bihon')}/>
                </View>

                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Bicol Express: 315</Text>
                    <OrderButton
                        onPress={() => Alert.alert('Added Bicol Express')}/>
                </View>

                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Bistik Tagalog: 315</Text>
                    <OrderButton
                        onPress={() => Alert.alert('Added Bistik Tagalog')}/>
                </View>

                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Rice: 50</Text>
                    <OrderButton
                        onPress={() => Alert.alert('Added Rice')}/>
                </View>

                <Text style={styles.orderTextHeader}>Drinks</Text>
                <Divider />
                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Sarsi 1.5: 60</Text>
                    <OrderButton
                        onPress={() => Alert.alert('Added Sarsi 1.5')}/>
                </View>

                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Royal 1.5: 60</Text>
                    <OrderButton
                        onPress={() => Alert.alert('Added Royal 1.5')}/>
                </View>

                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Coke 1.5: 60</Text>
                    <OrderButton
                        onPress={() => Alert.alert('Added Coke 1.5')}/>
                </View>

                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Sprite 1.5: 60</Text>
                    <OrderButton
                        onPress={() => Alert.alert('Added Sprite 1.5')}/>
                </View>

                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Ice Tea: 55</Text>
                    <OrderButton
                        onPress={() => Alert.alert('Added Ice Tea Jag')}/>
                </View>

                <View style={styles.orderPanel}>
                    <Text style={[styles.orderText]}>Pineapple Juice: 55</Text>
                    <OrderButton
                        onPress={() => Alert.alert('Added Pineapple Juice Jag')}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    orderTextHeader: {
        alignItems: 'center',
        fontSize: 40,
        fontWeight:"bold",
        textAlign:"center",
        backgroundColor:"#7ed6df"

    },
    orderText: {
        flex: 1,
        fontSize: 25,
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    orderPanel: {
        backgroundColor: '#f5f6fa',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin:5
    },
    
});