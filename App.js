import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import taskScreen from './components/Task';
import raisonScreen from './components/Rasion';
import productivityScreen from './components/Productivity';
const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
     <Stack.Screen name="Task" component={taskScreen} />
     <Stack.Screen name="Raison" component={raisonScreen} />
     <Stack.Screen  name="Pro" component={productivityScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
