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
      <View style={styles.titleContainer} >
         <Text style={styles.headTitle}>LOGIN</Text>
      </View>
      <View style={styles.inputContainer} >
            <View style={styles.inputPass} >
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    //keyboardType="numeric"
                  />
              </View>
              <View style={styles.inputPass} >
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    //keyboardType="numeric"
                  />
                  <Image style={styles.image}  source={require('./eye 1.png')}/>
              </View>
      </View>

     
      <View style={styles.buttonContainer} >
          <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.text} >  
          <Text  style={styles.link} >When you agree to terms and conditions</Text>
          <Text style={styles.forgotPass}>Forgot your password?</Text>
         <Text style={styles.login}>Or login with</Text>
      </View>
      <View style={styles.bottom} >
          <Image style={styles.image}  source={require('./mxh.png')}/>
      </View>
      <View style={styles} >
      
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
    backgroundColor: '#E0F7FA'
  },
  titleContainer:{
    flex:1,
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  headTitle:{
      fontSize: 50,
      fontWeight: 'bold'
  },
  inputContainer:{
    marginTop:30,
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: 'blue',
    justifyContent: 'space-around',
    
  },
  inputPass:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor :'grey',
    opacity: 0.5,
    height: 60,
  },
  input:{
    fontSize: 25,
    color: 'black',
  },
  image:{
    marginTop:10,
  },
  text:{
    //paddingTop:50,
    flex: 1,
    justifyContent: 'space-around',
    height: 0,
   // backgroundColor: 'pink',
    paddingBottom:50,
  },
  forgotPass:{
    color: 'blue',
    textAlign: 'center',
    //marginTop: -25,
     fontSize: 20,
  },
  login:{
    textAlign: 'center',
     fontSize: 20,
    //marginBottom: ,
  },
  link:{
   // flex: 1,
    //backgroundColor: 'blue',
    textAlign: 'center',
    fontSize: 20,
  },
  buttonContainer :{
    flex:1,
    marginTop: 50,
    
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
    flex:1,
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
   

  }

  
});
export default Flex;

