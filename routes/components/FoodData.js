import React from 'react';
import {
    View,
    Text,
    Divider
} from 'react-native';
export class PrkSin extends React.Component{
    constructor(props) {
        super(props);
    
        this.onPressPS = this.onPressPS.bind(this);
      }
    food = {
        food: 'Pork Sinigang',
        price: "315",
    };
    
    render(){
        
        return(
            <View >
                <Text>{this.PS.food}</Text>
                <Divider/>
                <Text>{this.PS.price}</Text>
            </View>
        )
    }
}
export class FshSin extends React.Component{
    constructor(props) {
        super(props);
    
        this.onPressFS = this.onPressFS.bind(this);
      }
    food = {

        food: 'Fish Sinigang',
        price: "345",
    };
    render(){
        
        return(
            <View>
                <Text>{this.state.food}</Text>
                <Divider/>
                <Text>{this.state.price}</Text>
            </View>
        )
    }
}
export class PrwnSin extends React.Component{
    constructor(props) {
        super(props);
    
        this.onPressPrS = this.onPressPrS.bind(this);
      }
    food = {

        food: 'Prawn Sinigang',
        price: "395",
    };
    render(){
        
        return(
            <View>
                <Text>{this.state.food}</Text>
                <Divider/>
                <Text>{this.state.price}</Text>
            </View>
        )
    }
}