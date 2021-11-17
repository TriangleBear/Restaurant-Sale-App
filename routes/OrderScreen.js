import 'react-native-gesture-handler';
import React from 'react';
import {  View, StyleSheet, Text, StatusBar, TouchableOpacity, Alert} from 'react-native';
import { Divider } from 'react-native-paper';


export default class OrderList extends React.Component {
  constructor(){
    super()
    this.state={
        title: 'First Client',
        orderList: '1x Sinigang: Pork \n1x Adobo: Pork \n6x Rice \n',
    }
  }

  renderItem = () => (
    /* to add more stuff to read by this render, add a data to the "const Data" first then come back here and
    copy this format => <name of data> ={item. <name of data again>}
    it can be copied and pasted together with the others, itll do the rest! */
    <Item title={this.state.title} orderList={this.state.orderList}/>
    
  );
    render(){
      return (
        <View style={styles.clientBar}>
    <Text style={styles.title}>{this.state.title}</Text>
   <Divider/>
    <Text style={styles.orderList}>{this.state.orderList}</Text>
      <View style={styles.qty}>
      <Text style={styles.number}>{this.state.qty}</Text>
      </View>
    <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Confirmed') }>
        <Text style={{color:"white", fontWeight: "bold"}}>Confirm</Text>
        
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







