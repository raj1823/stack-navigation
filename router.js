
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import  start from './src/components/start';
import dashboard  from './src/components/dashboard';
import Home from './src/components/Home';
import * as React from 'react';
import Home2 from './src/components/home2'
import second from './src/components/second'

const Stack = createStackNavigator();

function MyStac() {
  return (
   
      <Stack.Navigator>
      
        
        <Stack.Screen name="start" component={start} />


        <Stack.Screen name="dashboard" component={dashboard} />
             
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="home2" component={Home2} />
        <Stack.Screen name="second" component={Home} />
      
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