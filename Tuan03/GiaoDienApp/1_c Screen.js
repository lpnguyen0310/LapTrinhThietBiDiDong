import React, { useState } from 'react';
import {StyleSheet, View, Image,Text,TouchableOpacity,Button,TextInput} from 'react-native';

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={styles.imageContainer} >
         <Text style={styles.headTitle}>CODE</Text>
      </View>
      <View style={styles.title} >
            <Text style={styles.text}>FORGET</Text>
            <Text style={styles.text}>PASSWORD</Text>
      </View>
      <View style={styles.subtitle} >
        <Text  style={styles.textSubtitle}>Enter ontime password sent on ++849092605798 </Text>
      </View>
     <View style={styles.otpContainer}>
        <TextInput
          style={styles.otpInput}
          maxLength={6}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonContainer} >
          <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>VERIFY CODE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom} >
        
      </View>
      
        
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: '#ecf0f1',
    padding: 30,
    backgroundColor: '#e0f7fa'
  },
  imageContainer:{
    flex:1,
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  headTitle:{
      fontSize: 50,
      fontWeight: 'bold'
  },
  title:{
    flex: 1,
    //backgroundColor: 'blue',
    textAlign: 'center',
    justifyContent: 'center'
  },
  text:{
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
  },
  subtitle:{
    flex: 1,
    //backgroundColor: 'pink',
  
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  otpInput: {
    borderBottomWidth: 2,
    borderColor: '#000',
    fontSize: 24,
    textAlign: 'center',
    width: '100%',
  },
  textSubtitle:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonContainer :{
    flex:1,
    marginTop: 25,
    
   //backgroundColor: '#FFC300',
  },
  button:{
      backgroundColor: '#FFC300',
      textAlign:'center',
      height: 60,
      justifyContent: 'center',

  },
   buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
     textAlign:'center',
  },
  bottom:{
    flex: 1,
    backgroundColor: '#00CFFF',
    width: '100%',
    opacity: 0.5,
  }

  
});
export default Flex;

