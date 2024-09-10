import React from 'react';
import {StyleSheet, View, Image,Text,TouchableOpacity,Button} from 'react-native';

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
      <View style={styles.circleContainer} >
         <Image style={styles.image}  source={require('./Ellipse 8.png')}/>
      </View>
      <Text style={styles.text}>GROW</Text>
      <Text style={styles.title}>YOUR BUSINESS</Text>
      
      <Text style={styles.subtitle}>
        We will help you to grow your business using online server
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.link}>HOW WE WORK?</Text>
      <View style={styles.bottom} >
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e0f7fa'
  },
   circleContainer: {
    flex:1,
    alignItems: 'center',
    marginTop:120,
    marginBottom: 25,
  },
  image:{
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    marginTop:50,
    fontSize: 25,
    fontWeight: 'bold', 
    color: 'black',
    textAlign: 'center', 
  },
  title: {
    flex:1,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    
  },
  subtitle:{
   flex: 1,
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  //  marginBottom: 40,
    fontWeight: 'bold',
    marginTop: -60,
  // marginLeft: 0.7,
  //  marginRight: 1,
  },
  buttonContainer: {
    //flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', 
    marginBottom: 30,
   
     
  },
  button: {
    backgroundColor: '#FFC300',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  link:{
    //backgroundColor: '#00CFFF',
    flex: 1,
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: -20,
  },
  bottom:{
    marginTop: -50,
    flex: 1,
    backgroundColor: '#00CFFF',
    width: '100%',
    opacity: 0.5,
  }
});

export default Flex;