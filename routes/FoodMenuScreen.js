import React from 'react';
import { 
    View, 
    Text,
    StyleSheet, 
    SafeAreaView, 
    ScrollView, 
    Alert,
    ActivityIndicator 
        } from 'react-native'
import { Divider } from 'react-native-paper';
import OrderButton from './components/FoodMenuButtons';

const urlFoodData = 'https://raw.githubusercontent.com/TriangleBear/Restaurant-Sale-App/master/routes/components/foodData.json';
export default class FoodMenu extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isLoading: true,
            dataSource: null,
        }
    }
    componentDidMount(){
        return fetch(urlFoodData)
        .then( (response) => response.json() )
        .then( (responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson.food
            })
        }).catch((error) => {
            console.log(error)
        });
    }
    render(){

        if(this.state.isLoading){
            return(
                <View styles={styles.container}>
                    <ActivityIndicator/>
                </View>
            )
        }else{
            const PrkSiniP = this.state.dataSource.map((val)=>{return val.PrkSiniP;})
            const FshSiniP = this.state.dataSource.map((val)=>{return val.FshSiniP;})
            const PrwnSiniP = this.state.dataSource.map((val)=>{return val.PrwnSiniP;})
            const PrkAdbP = this.state.dataSource.map((val)=>{return val.PrkAdbP;})
            const ChkAdbP = this.state.dataSource.map((val)=>{return val.ChkAdbP;})
            const ChkTnolaP = this.state.dataSource.map((val)=>{return val.ChkTnolaP;})
            const BulSpP = this.state.dataSource.map((val)=>{return val.BulSpP;})
            const CrpyPtP = this.state.dataSource.map((val)=>{return val.CrpyPtP;})
            const PnctCtP = this.state.dataSource.map((val)=>{return val.PnctCtP;})
            const PnctBihP = this.state.dataSource.map((val)=>{return val.PnctBihP;})
            const BclExpP = this.state.dataSource.map((val)=>{return val.BclExpP;})
            const BstkTglP = this.state.dataSource.map((val)=>{return val.BstkTglP;})
            const RiceP = this.state.dataSource.map((val)=>{return val.RiceP;})
            const Sarsi15P = this.state.dataSource.map((val)=>{return val.Sarsi15P;})
            const Royal15P = this.state.dataSource.map((val)=>{return val.Royal15P;})
            const Coke15P = this.state.dataSource.map((val)=>{return val.Coke15P;})
            const Sprite15P = this.state.dataSource.map((val)=>{return val.Sprite15P;})
            const IceTP = this.state.dataSource.map((val)=>{return val.IceTP;})
            const PnaplJcP = this.state.dataSource.map((val)=>{return val.PnaplJcP;})
            {/** ... .. .-. ....... .--- .- ... .--. . .-. ....... .-.. .- -. --. ....... -- .- .-.. .- -.- .- ... */}
            return (
                <SafeAreaView >
                    <ScrollView >
                        {console.log('Loaded')}
                        <Text style={styles.orderTextHeader}>Sinigang</Text>
                        <Divider />
                        {/* pork */}
                        <View style={styles.orderPanel}>
                            <Text style={[styles.orderText]}>Pork: {PrkSiniP}</Text>
                            <OrderButton
                                onPress={() => ((Alert.alert(
                                    "Added Sinigang na Baboy", 
                                    `price: ${PrkSiniP}`,
                                    [{text: "Cancel",style: 'cancel'},{text: "OK",style: 'ok'}]))) }/>
                        </View>
        
                        {/* fish */}
                        <View style={styles.orderPanel}>
                            <Text style={[styles.orderText]}>Fish: {FshSiniP}</Text>
                            <OrderButton
                                onPress={() => Alert.alert(
                                    'Added Sinigang na Isda', 
                                    `price: ${FshSiniP}`,
                                    [{text: "Cancel",style: 'cancel'},{text: "OK",style: 'ok'}])}/>
                        </View>
        
                        {/* prawn */}
                        <View style={styles.orderPanel}>
                            <Text style={[styles.orderText]}>Prawn: {PrwnSiniP}</Text>
                            <OrderButton
                                onPress={() => Alert.alert(
                                    'Added Sinigang na Hipon', 
                                    `price: ${PrwnSiniP}`,
                                    [{text: "Cancel",style: 'cancel'},{text: "OK",style: 'ok'}])}/>
                        </View>
        
                        {/* Header */}
                        <Text style={styles.orderTextHeader}>Adobo</Text>
                        <Divider />
                        {/* pork adobo */}
                        <View style={styles.orderPanel}>
                            <Text style={[styles.orderText]}>Pork: {PrkAdbP}</Text>
                            <OrderButton
                                onPress={() => Alert.alert(
                                    'Added Pork Adobo', 
                                    `price: ${PrkAdbP}`,
                                    [{text: "Cancel",style: 'cancel'},{text: "OK",style: 'ok'}])}/>
                        </View>
        
                        {/* chicken adobo */}
                        <View style={styles.orderPanel}>
                            <Text style={[styles.orderText]}>Chicken: {ChkAdbP}</Text>
                            <OrderButton
                                onPress={() => Alert.alert(
                                    'Added Chicken Adobo', 
                                    `price: ${ChkAdbP}`,
                                    [{text: "Cancel",style: 'cancel'},{text: "OK",style: 'ok'}])}/>
                        </View>
        
                        <Text style={styles.orderTextHeader}> Others </Text>
                        <View style={styles.orderPanel}>
                            <Text style={[styles.orderText]}>Tinolang Manok: {ChkTnolaP}</Text>
                            <OrderButton
                                onPress={() => Alert.alert(
                                    'Added Tinolang Manok', 
                                    `price: ${ChkTnolaP}`,
                                    [{text: "Cancel",style: 'cancel'},{text: "OK",style: 'ok'}])}/>
                        </View>
        
                        <View style={styles.orderPanel}>
                            <Text style={[styles.orderText]}>Bulalo Soup: {BulSpP}</Text>
                            <OrderButton
                                onPress={() => Alert.alert(
                                    'Added Bulalo Soup', 
                                    `price: ${BulSpP}`,
                                    [{text: "Cancel",style: 'cancel'},{text: "OK",style: 'ok'}])}/>
                        </View>
        
                        <View style={styles.orderPanel}>
                            <Text style={[styles.orderText]}>Crispy Pata: {CrpyPtP}</Text>
                            <OrderButton
                                onPress={() => Alert.alert(
                                    'Added Cripy Pata', 
                                    `price ${CrpyPtP}`,
                                    [{text: "Cancel",style: 'cancel'},{text: "OK",style: 'ok'}])}/>
                        </View>
        
                        <View style={styles.orderPanel}>
                            <Text style={[styles.orderText]}>Pancit Canton: {PnctCtP}</Text>
                            <OrderButton
                                onPress={() => Alert.alert(
                                    'Added Pancit Canton', 
                                    `price: ${PnctCtP}`,
                                    [{text: "Cancel",style: 'cancel'},{text: "OK",style: 'ok'}])}/>
                        </View>
        
                        <View style={styles.orderPanel}>
                            <Text style={[styles.orderText]}>Pancit Bihon: {PnctBihP}</Text>
                            <OrderButton
                                onPress={() => Alert.alert(
                                    'Added Pancit Bihon', 
                                    `price: ${PnctBihP}`,
                                    [{text: "Cancel",style: 'cancel'},{text: "OK",style: 'ok'}])}/>
                        </View>
        
                        <View style={styles.orderPanel}>
                            <Text style={[styles.orderText]}>Bicol Express: {PnctBihP}</Text>
                            <OrderButton
                                onPress={() => Alert.alert(
                                    'Added Bicol Express', 
                                    `price: ${PnctBihP}`,
                                    [{text: "Cancel",style: 'cancel'},{text: "OK",style: 'ok'}])}/>
                        </View>
        
                        <View style={styles.orderPanel}>
                            <Text style={[styles.orderText]}>Bistik Tagalog: {BstkTglP}</Text>
                            <OrderButton
                                onPress={() => Alert.alert(
                                    'Added Bistik Tagalog', 
                                    `price: ${BstkTglP}`,
                                    [{text: "Cancel",style: 'cancel'},{text: "OK",style: 'ok'}])}/>
                        </View>
        
                        <View style={styles.orderPanel}>
                            <Text style={[styles.orderText]}>Rice: {RiceP}</Text>
                            <OrderButton
                                onPress={() => Alert.alert(
                                    'Added Rice', 
                                    `price: ${RiceP}`,
                                    [{text: "Cancel",style: 'cancel'},{text: "OK",style: 'ok'}])}/>
                        </View>
        
                        <Text style={styles.orderTextHeader}>Drinks</Text>
                        <Divider />
                        <View style={styles.orderPanel}>
                            <Text style={[styles.orderText]}>Sarsi 1.5: {Sarsi15P}</Text>
                            <OrderButton
                                onPress={() => Alert.alert(
                                    'Added Sarsi 1.5', 
                                    `price ${Sarsi15P}`,
                                    [{text: "Cancel",style: 'cancel'},{text: "OK",style: 'ok'}])}/>
                        </View>
        
                        <View style={styles.orderPanel}>
                            <Text style={[styles.orderText]}>Royal 1.5: {Royal15P}</Text>
                            <OrderButton
                                onPress={() => Alert.alert(
                                    'Added Royal 1.5', 
                                    `price: ${Royal15P}`,
                                    [{text: "Cancel",style: 'cancel'},{text: "OK",style: 'ok'}])}/>
                        </View>
        
                        <View style={styles.orderPanel}>
                            <Text style={[styles.orderText]}>Coke 1.5: {Coke15P}</Text>
                            <OrderButton
                                onPress={() => Alert.alert(
                                    'Added Coke 1.5', 
                                    `price: ${Coke15P}`,
                                    [{text: "Cancel",style: 'cancel'},{text: "OK",style: 'ok'}])}/>
                        </View>
        
                        <View style={styles.orderPanel}>
                            <Text style={[styles.orderText]}>Sprite 1.5: {Sprite15P}</Text>
                            <OrderButton
                                onPress={() => Alert.alert(
                                    'Added Sprite 1.5', 
                                    `price: ${Sprite15P}`,
                                    [{text: "Cancel",style: 'cancel'},{text: "OK",style: 'ok'}])}/>
                        </View>
        
                        <View style={styles.orderPanel}>
                            <Text style={[styles.orderText]}>Ice Tea: {IceTP}</Text>
                            <OrderButton
                                onPress={() => Alert.alert(
                                    'Added Ice Tea Jag', 
                                    `price: ${IceTP}`,
                                    [{text: "Cancel",style: 'cancel'},{text: "OK",style: 'ok'}])}/>
                        </View>
        
                        <View style={styles.orderPanel}>
                            <Text style={[styles.orderText]}>Pineapple Juice: {PnaplJcP}</Text>
                            <OrderButton
                                onPress={() => Alert.alert(
                                    'Added Pineapple Juice Jag', 
                                    `price: ${PnaplJcP}`,
                                    [{text: "Cancel",style: 'cancel'},{text: "OK",style: 'ok'}])}/>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            );
        }

        
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
    confirmPanel:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: '#f5f6fa',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin:1,
        fontSize: 40,
        fontWeight:"bold",
        textAlign:"center",
        backgroundColor:"#90EE90"
    },
    confirmButton:{
        fontSize: 20,
        backgroundColor: '#7bed9f',
        marginTop: 10,
        paddingHorizontal: 15,
        borderWidth:2
    }
    
});
