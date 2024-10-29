import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../app/screens/home'; 
import Header from '../app/shared/header'; 

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => ({
        headerTitle: () => <Header navigation={navigation} />
      })}
    >
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ title: '' }}
      />
      {/* <Stack.Screen 
        name="ReviewDetails" 
        component={ReviewDetails} 
        options={{ title: 'Review Details' }}
      /> */}
    </Stack.Navigator>
  );
}

export default HomeStack;
