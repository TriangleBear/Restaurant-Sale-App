import React from 'react';
import {Text, TouchableOpacity, StyleSheet } from 'react-native';

const OrderButton = (props) => {
    return (
        <TouchableOpacity
            style={styles.buttonOrderPanelgreen}
            onPress={() => props.onPress()}>
            <Text style={{ fontSize: 25 }}>Order</Text>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    
    buttonOrderPanelgreen: {
        backgroundColor: '#7bed9f',
        marginTop: 10,
        paddingHorizontal: 15,
        borderWidth:2
      
    },
    
});

//onPress={() => props.onPress()}
export default OrderButton;