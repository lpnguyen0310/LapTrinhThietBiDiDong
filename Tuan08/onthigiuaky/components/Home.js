import React,{useState} from 'react';
import {Text,View,SafeAreaView,Image,TouchableOpacity,StyleSheet} from 'react-native';


export default function App({onPress}){
  return(
      <SafeAreaView style ={styles.container}>
        <Text style = {{fontSize:15,fontWeight:'bold',textAlign:'center'}}>A premium online store for sporter and their stylish choice</Text>
        <View style ={styles.imageContainer}>
          <Image style = {styles.image} source ={require('../image/bifour_-removebg-preview.png')}/>
        </View>
        <Text style = {styles.nameShop}>POWER BIKE SHOP</Text>
        <TouchableOpacity style = {styles.buttonGetStart} onPress={onPress}>
            <Text style = {{color:'white',textAlign:'center',padding:5}}>GET START</Text>
        </TouchableOpacity>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center'
  },
  imageContainer:{
    backgroundColor:'pink',
    height: 300,
    width:'90%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    marginLeft:20,
    marginTop:20,
  },
  image:{
    width: 220,
    height:200,
    marginTop:30,
  },
  nameShop:{
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:10,
  },
  buttonGetStart:{
    width:'80%',
    backgroundColor:'red',
    height:30,
    marginLeft: 40,
    marginTop:30,
    borderRadius:30
  }

})