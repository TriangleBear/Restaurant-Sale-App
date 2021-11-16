import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, Alert} from 'react-native';
import { Divider } from 'react-native-paper';
import { PA } from './functions/OrderFood';

const Data = [
  //just add a bracket with "title:" to generate a tab.
  {
    title: 'First Client',
    orderList: '1x Sinigang: Pork \n1x Adobo: Pork \n6x Rice \n',
  },
  {
    title: 'Second Client',
    orderList: '1x Pancit Canton \n1x Sarsi',
  }
];

const Item = ({ title, orderList, qty}) => (
  <View style={styles.clientBar}>
    <Text style={styles.title}>{title}</Text>
   <Divider/>
    <Text style={styles.orderList}>{orderList}</Text>
      <View style={styles.qty}>
      <Text style={styles.number}>{qty}</Text>
      </View>
    <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Confirmed') }>
        <Text style={{color:"white", fontWeight: "bold"}}>Confirm</Text>
        
      </TouchableOpacity>
  </View>
);

const OrderList = () => {
  const renderItem = ({ item }) => (
    /* to add more stuff to read by this render, add a data to the "const Data" first then come back here and
    copy this format => <name of data> ={item. <name of data again>}
    it can be copied and pasted together with the others, itll do the rest! */
    <Item title={item.title} orderList={item.orderList}/>
    
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Data}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  clientBar: {
    backgroundColor: '#dcdedc',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight:'bold',
  },
  orderList: {
    fontSize: 12,
    marginLeft: 6,
  },
  number: {
    fontSize: 18,
    paddingLeft: 10,
  },
  qty: {
    flexDirection: 'row',
    margin: 5
  },
  button: {
    alignItems: "center",
    backgroundColor: "green",
    padding: 7
  },
});

export default OrderList;







