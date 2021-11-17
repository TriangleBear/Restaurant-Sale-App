import React from 'react';
import {View, StyleSheet, Text, StatusBar, TouchableOpacity, Alert } from 'react-native';


export default class Billing extends React.Component {
  constructor(){
    super()
    this.state={
      title: 'First Client - ',
      price:' ₱ ',
    }
  }
  renderItem = ({ item }) => (
    /* to add more stuff to read by this render, add a data to the "const Data" first then come back here and
    copy this format => <name of data> ={item. <name of data again>}
    it can be copied and pasted together with the others, itll do the rest! */
    <Item title={this.state.title} orderList={this.state.orderList} price={item.price}/>
    
  );
  
    render(){
      return (
        <View style={styles.clientBar}>
  
    <View>
      <Text style={styles.title}>{this.state.title}{this.state.price}</Text>
    
     </View>
        <View style={styles.qty}>
        <Text style={styles.number}>{this.state.qty}</Text>
        </View>
      <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('Done')}>
          <Text style={{color:"white", fontWeight: "bold"}}>Fulfilled</Text>
        </TouchableOpacity>
  
    </View>
      );
    }
  
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