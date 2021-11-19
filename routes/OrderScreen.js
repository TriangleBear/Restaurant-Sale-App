import 'react-native-gesture-handler';
import React from 'react';
import {  View, StyleSheet, Text, StatusBar, TouchableOpacity, Alert, FlatList} from 'react-native';
import { Divider } from 'react-native-paper';

export default class OrderList extends React.Component{
  constructor () {
    super()
    this.state=
        {title: 'Pork Sinigang', price: 315, key: 1},
        {title: 'Fish Sinigang', price: 345, key: 2};
  }
  
  render(){
        return (
          <View style={styles.clientBar}>
                
                  <View>
                    <Text style={styles.title}>Test Client</Text>
                    <Divider/>
                    <Text style={styles.orderList}>{this.FoodData}</Text>
               <TouchableOpacity
                   style={styles.button}
                   onPress={() => Alert.alert("Done") }>
                   <Text style={{color:"white", fontWeight: "bold"}}>Confirm</Text>
                 </TouchableOpacity>
                </View>
                  
                
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







