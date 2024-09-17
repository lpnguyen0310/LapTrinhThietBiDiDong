import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet,View,CheckBox,TextInput,Button,TouchableOpacity } from 'react-native';


const Flex = () => {
  const [passwordLength, setPasswordLength] = useState('');
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumber,   
 setIncludeNumber] = useState(false);
  const [includeSymbol, setIncludeSymbol] = useState(false);
  const   
 [generatedPassword, setGeneratedPassword] = useState('');
 const generatePassword = () => {
    
    setGeneratedPassword(newPassword);
  };
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
      <View style = {styles.besideContainer}>
            <View>  
              <Text style = {styles.headTitle}>PASSWORD GENERATOR</Text>
            </View>

            <View style = {styles.inputContainer}>
              <TextInput style = {styles.inputPassword} />
            </View>
            
            <View style = {styles.checkContainer}>
                <View style = {styles.inputRow}>
                  <Text style ={styles.textInputRow}>Password length</Text>
                  <TextInput style = {styles.textInput} />
                </View>
                <View style = {styles.inputRow}>
                  <Text style ={styles.textInputRow}>Include lower case letters</Text>
                     <TouchableOpacity style={styles.outter}>
                       <View style = {styles.inner}/>
                      </TouchableOpacity>
                </View>
                <View style = {styles.inputRow}>
                  <Text style ={styles.textInputRow}>Include upper letters</Text>
                   <TouchableOpacity style={styles.outter}>
                       <View style = {styles.inner}/>
                      </TouchableOpacity>
                </View>
                <View style = {styles.inputRow}>
                  <Text style ={styles.textInputRow}>Include number</Text>
                    <TouchableOpacity style={styles.outter}>
                       <View style = {styles.inner}/>
                      </TouchableOpacity>
                </View>
                <View style = {styles.inputRow}>
                  <Text style ={styles.textInputRow} >Include special symbol</Text>
                    <TouchableOpacity style={styles.outter}>
                       <View style = {styles.inner}/>
                      </TouchableOpacity>
                </View>

                <View style = {styles.buttonContainer}>
                  <Button 
                   style = {styles.button}
                     title = 'GENERATE PASSWORD'
                   
                    
                  />
                </View>
            </View>

      </View>
      
  
      
        
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#6a5acd',
    padding: 30,
  },
  besideContainer:{
    backgroundColor: '#483d8b',
    width: '100%',
    height: '95%',
    marginTop: 10,
    borderRadius: 15,
    
  },
  headTitle:{
    fontWeight : 'bold',
    fontSize:35,
    textAlign: 'center',
    color: 'white',
    marginTop: 25,
  },
  inputPassword:{
    backgroundColor: 'black',
    opacity: 0.7,
    height: 50,
  },
  inputContainer:{
    padding: 20,
  },
  checkContainer:{
    flex: 1,
    flexDirection: 'column',
    justifyContent:'space-around',

  },
  inputRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput:{
    backgroundColor: 'white',
    width: '40%',
    marginRight: 12,
    
    
  },
  textInputRow:{
    fontSize:25,
    color: 'white',
    marginLeft:10,
  },
   outter:{
      width: 25,
      height: 25,
      borderWidth: 1,
      //borderRadius: 15,
      marginTop: 10,
      backgroundColor: 'white',
      marginRight: 10,

  },
  button:{
    padding: 20,
    backgroundColor: '#4b0082',
    fontSize: 35,
    

  },
  buttonContainer:{
    width: '100%',
    padding: 20,
    //backgroundColor: '#4b0082',
    
  }
 
});


export default Flex
