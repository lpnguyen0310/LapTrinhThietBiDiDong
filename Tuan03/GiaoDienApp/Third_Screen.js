import React from 'react';
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
         <Image style={styles.image}  source={require('./Locked.png')}/>
      </View>
      <View style={styles.title} >
            <Text style={styles.text}>FORGET</Text>
            <Text style={styles.text}>PASSWORD</Text>
      </View>
      <View style={styles.subtitle} >
        <Text  style={styles.textSubtitle}>Provide your account's email for which you want to reset your password </Text>
      </View>
      <View style={styles.inputEmail} >
          <Image style={styles.image}  source={require('./Email.png')}/>
          <TextInput style ={styles.input} placeholder ='Email'> </TextInput>
      </View>
      <View style={styles.buttonContainer} >
          <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
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
    marginTop: 100,
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
  textSubtitle:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  inputEmail:{
    backgroundColor:'grey',
    flexDirection:'row',
    justifyContent:'center',
    height: 60,


  },
  image:{
    alignItems: 'center',
    justifyContent:'center',
    alignContent: 'center',
    marginTop:7.50,
    marginLeft:3
  },
  input:{
    backgroundColor:'grey',
    opacity: 0.5,
    width: '87%',
    justifyContent:'center',

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
