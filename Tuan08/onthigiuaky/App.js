import React,{useState} from 'react';
import {Text,View} from 'react-native';
import AddBike from './components/AddBike';
import ListBike from './components/ListBike';
import Home from './components/Home';

const App=()=>{
  const[page,setPage] = useState('Home');
  const hanlderChangePage=(page)=>{
    setPage(page)
  };


  return(
    <View style ={{height:'100vh'}}>
    {
      page =='Home' ?(
          <Home onPress={() => hanlderChangePage('ListBike')}/>
      ):page =='ListBike' ? (
          <ListBike onPress = {()=> hanlderChangePage('AddBike')}/>
      ): page == null}
    </View>
  );
};

export default App;