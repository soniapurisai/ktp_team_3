import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../app/screens/home'; 
import Header from '../app/shared/header'; 
import College from '../app/screens/college';
import HighSchool from '../app/screens/highschool';
import RainyDay from '../app/screens/rainyday';
import YoungAdult from '../app/screens/youngadult';

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
      <Stack.Screen 
        name="college" 
        component={College} 
        options={{ title: 'College' }}
      />
      <Stack.Screen 
        name="rainyday" 
        component={RainyDay} 
        options={{ title: 'Rainy Day' }}
      />
      <Stack.Screen 
        name="highschool" 
        component={HighSchool} 
        options={{ title: 'High School' }}
      />
      <Stack.Screen 
        name="youngadult" 
        component={YoungAdult} 
        options={{ title: 'Young Adult' }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
