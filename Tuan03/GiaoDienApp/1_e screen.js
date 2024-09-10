import React, { useState } from 'react';
import {StyleSheet, View, Image,Text,TouchableOpacity,Button,TextInput,CheckBox,RadioButton } from 'react-native';

const Flex = () => {
   const [isSelected, setSelection] = useState(false);
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
                    placeholder="Name"
                    //keyboardType="numeric"
                  />
              </View>
               <View style={styles.inputPass} >
                  <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    //keyboardType="numeric"
                  />
              </View>
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
               <View style={styles.inputPass} >
                  <TextInput
                    style={styles.input}
                    placeholder="BirthDay"
                    //keyboardType="numeric"
                  />
              </View>
      </View>

     
    
  
      <View style={styles.radioButtonContainer} >
         <TouchableOpacity style={styles.outter}>
           <View style = {styles.inner}/>
        </TouchableOpacity>
        <Text style={styles.label}>Male</Text> 
        <TouchableOpacity style={styles.outter}>
           <View style = {styles.inner}/>
        </TouchableOpacity>
        <Text style={styles.label}>Female</Text> 
      </View>
      
      <View style={styles.buttonContainer} >
          <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
      
        <View style={styles.bottom} >
          <Text style={styles.textBottom}>When you agree to terms and conditions</Text>
        
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
    backgroundColor: '#90ee90'
  },
  outter:{
      width: 25,
      height: 25,
      borderWidth: 1,
      borderRadius: 15,
      marginTop: 10,

  },
  titleContainer:{
   // flex:1,
    ///backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  headTitle:{
      fontSize: 50,
      fontWeight: 'bold'
  },
  inputContainer:{
    marginTop:30,
    flex: 1,
    flexDirection: 'column',
   // backgroundColor: 'blue',
    justifyContent: 'space-around',
    //height:, 
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
  buttonContainer :{
    //flex:1,
   //marginTop: 50,
    
   //backgroundColor: '#FFC300',
  },
  button:{
      backgroundColor: '#8b0000',
      textAlign:'center',
      height: 60,
      justifyContent: 'center',
      marginTop: 25,

  },
   buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textAlign:'center',
  
  },
  radioButtonContainer:{
   // flex: 1,
    flexDirection: 'row',
    justifyContent:'space-around',
   marginTop:-25,
  },
  label:{
    fontSize: 20,
    marginTop: 5,
  },
  image:{
      marginTop: 15,
  },
  bottom:{
    marginBottom: 50,
    textAlign: 'center',
  },
  textBottom:{
    fontSize: 18,
     textAlign: 'center',
    marginTop: 15,
  }
 

  
});
export default Flex;


