import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, Alert } from 'react-native';

const Data = [
  //just add a bracket with "title:" to generate a tab.
  {
    title: 'First Client - ',
    price:' ₱ '
  },
  {
    title: 'Second Client - ',
    price:' ₱ '
  }
];

const Item = ({ title, orderList, qty,price}) => (
  <View style={styles.clientBar}>

  <View>
    <Text style={styles.title}>{title}{price}</Text>
  
   </View>
      <View style={styles.qty}>
      <Text style={styles.number}>{qty}</Text>
      </View>
    <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Done')}>
        <Text style={{color:"white", fontWeight: "bold"}}>Fulfilled</Text>
      </TouchableOpacity>

  </View>
);

const Billing = () => {
  const renderItem = ({ item }) => (
    /* to add more stuff to read by this render, add a data to the "const Data" first then come back here and
    copy this format => <name of data> ={item. <name of data again>}
    it can be copied and pasted together with the others, itll do the rest! */
    <Item title={item.title} orderList={item.orderList} price={item.price}/>
    
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
  price:{
    
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

export default Billing;