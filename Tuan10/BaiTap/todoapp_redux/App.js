import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './Store/index'; 
import StartScreen from './components/StartScreen';
import ToDoList from './components/ToDoList';
import AddJobScreen from './components/AddJob';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="ToDoList" component={ToDoList} />
          <Stack.Screen name="AddJobScreen" component={AddJobScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
