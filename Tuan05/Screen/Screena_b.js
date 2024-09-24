import * as React from 'react';
import { Text, SafeAreaView, StyleSheet,View,CheckBox,TextInput,Button,TouchableOpacity,Image } from 'react-native';
import { Rating } from 'react-native-ratings';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>

      <View style = {styles.imagesFront}>
        <Image style={styles.image}  source={require('./vs_blue.png')}/>
      </View>
      <View style = {styles.beside}>
           <Text style = {styles.textName}>Dien thoai Vsmart Joy 3 - Hang Chinh Hang</Text>
          <View style ={styles.information}>
           <Rating
              type="star"
              ratingCount={5}
              imageSize={20}
              onFinishRating={(rating) => console.log(`Rating is: ${rating}`)}
            />
            <Text style ={{marginLeft : 30}}>(Xem 828 danh gia)</Text>
          </View>
          <View style ={styles.information}>
           <Text style={{ color: 'red' }}>1.790.000 d</Text>
           <Text style={{ textDecorationLine: 'line-through', marginLeft: 40 }}>1.790.000 d</Text>
          </View>
          <View style = {styles.information}>
              <Text style ={{color:'red',fontWeight: 'bold'}}>O DAU RE HON HOAN TIEN</Text>
              <Image source ={require('./Group 1.png')}/>

          </View>
         <TouchableOpacity
      style={{
        marginTop: 10,
        borderRadius: 5,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth:1,
      }}
      onPress={() => {
        // Handle button press here, e.g., navigate to color selection screen
        console.log('Color button pressed');
      }}
    >
      <Text> 4 MAU-CHON MAU</Text>
      <Image source ={require('./Vector.png')}/>
    </TouchableOpacity  >

    <TouchableOpacity style = {styles.buttonBuy}  onPress={() => navigation.navigate('Details')}>
      <Text style ={{color:'white', fontSize:15, fontWeight: 'bold'}}>CHON MUA</Text>

    </TouchableOpacity>
      </View>
    </View>
  );
};

 const colors = ['#ADD8E6', '#FF0000', '#000000', '#0000FF'];

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

function DetailsScreen() {
  return (
    <View style={styles.s2container}>
        <View style = {styles.header}>
            <Image style ={styles.imageSmall} source ={require('./vs_black.png')}/>
            <Text style ={{marginLeft:10}}>Điện thoại VS Joy 3 Hàng chính hãng  </Text>
        </View>
          <View style = {styles.middle}>
            <Text style={styles.modalTitle}>Chọn một màu bên dưới:</Text>
            <View style={styles.colorOptions}>
              {colors.map((color, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.colorBox, { backgroundColor: color }]}
                  onPress={() => handleColorSelection(color)}
                />
              ))}
            </View>
            
        </View>
         <View style = {styles.bottom}>
         <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => {
                console.log('Selected color:', selectedColor);
                setModalVisible(false);
              }}
            >
              <Text style={styles.confirmButtonText}>XONG</Text>
            </TouchableOpacity>
         </View>
    </View>
  );
}

// Create the navigation stack
const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding:0,
    alignItems:'center',

  },
  s2container :{
    flex: 1,
    justifyContent: 'center',
    padding:0,
    alignItems:'center',
  },
  modalTitle:{
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center',
  },

  imagesFront:{
    flex:1,
  },
  beside:{
    //backgroundColor: 'red',
    flex:1,
  },
  textName:{
    fontSize:15,
    paddingTop:20,
  },
  image:{
    paddingTop:20,
    height:250,
    width: 200,
    marginBottom: 10,
  },
  information:{
    flexDirection:'row',
    marginTop:10,
  },
  buttonBuy:{
       marginTop: 40,
        borderRadius: 5,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'red',
        borderWidth:1,
  },
  header:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  imageSmall:{
      width: 120,
      height: 130
  },
  middle :{
    flex:3,

  } ,
  colorOptions: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 20,
    height : 300,
    alignItems :'center',
    alignContent: 'space-around'
  },
  colorBox: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 5,
    
  },
  bottom:{

      width: '80%',
      marginBottom: 30,
    
  },
  confirmButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width:'100%',
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign:'center'
  },

});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ... other code from the previous section
