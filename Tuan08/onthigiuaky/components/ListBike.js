import React, {useState,useEffect} from 'react';
import {Text,FlatList,TouchableOpacity,Image,View,SafeAreaView,StyleSheet} from 'react-native';
import{AntDesign,EvilIcons } from '@expo/vector-icons';

const localImages = {
  "1": require('../image/bione-removebg-preview.png'),
  "2": require('../image/bitwo-removebg-preview.png'),
  "3": require('../image/bithree_removebg-preview.png'),
  "4": require('../image/bifour_-removebg-preview.png'),
  "5": require('../image/bione-removebg-preview.png'),
  "6": require('../image/bitwo-removebg-preview.png'),
  "7": require('../image/bithree_removebg-preview.png'),
}



export default function App(){
   const [data, setData] = useState([]);
   const fetchData = async () => {
    try {
      const response = await fetch('https://66fc9140c3a184a84d1756f6.mockapi.io/Bike'); // Thay thế bằng đường dẫn API của bạn
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

   const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <View style = {styles.containerBike}>
         <Image source={localImages[item.id]} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      </View>
    </TouchableOpacity>
  );
  return(
      <SafeAreaView style ={styles.container}>
      <Text style ={{color:'red', fontWeight:'bold',fontSize:17, marginVertical:10,marginLeft:15}}>The world's Best Life</Text>

      <View style ={styles.buttonListSearch}>
          <TouchableOpacity style ={styles.button}>
              <Text style ={styles.textSearch}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={styles.button}>
              <Text style ={styles.textSearch}>RoadBike</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={styles.button}>
              <Text style ={styles.textSearch}>Mountain</Text>
          </TouchableOpacity>   
      </View>
      <FlatList
         data={data}
        renderItem={renderItem}
        numColumns = {2}
      />
      
      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  buttonListSearch:{
    flexDirection:'row',
    justifyContent:'space-around',
  },
  button:{
    width:80,
    borderRadius:5,
    borderColor:'salmon',
    borderWidth:1,
    textAlign:'center',
  },
  textSearch:{
    textAlign:'center',
  },
  itemContainer:{
    flex: 1,
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width:5, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    alignItems:'center',
  },
  containerBike:{
    width:120,
    height:150,
    borderRadius:5,
  },
  image:{
    width: 70,
    height:70,
    resizeMode: 'contain',
    justifyContent:'center',
    marginLeft:20,  
    alignItems:'center'
  },
  textContainer:{
    flexDirection:'column',
    textAlign:'center',
    alignItems:'center'
  },
  title:{
    color:'grey'
  },
  price:{
    fontWeight:'bold',
    fontSize:15
  }


})
