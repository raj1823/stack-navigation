
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import  start from './src/components/start';
import dashboard  from './src/components/dashboard';
import Home from './src/components/Home';
import * as React from 'react';

const Stack = createStackNavigator();

function MyStac() {
  return (
   
      <Stack.Navigator>
      
        
        <Stack.Screen name="start" component={start} />


        <Stack.Screen name="dashboard" component={dashboard} />
             
        <Stack.Screen name="home" component={Home} />
      
      </Stack.Navigator>
    
  );
}

  export default function App() {
    return (
      <NavigationContainer>
       <MyStac />
      </NavigationContainer>
    );
}