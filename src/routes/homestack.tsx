import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../app/screens/home'; 
import Header from '../app/shared/header'; 
import College from '../app/screens/college';
import HighSchool from '../app/screens/highschool';
import RainyDay from '../app/screens/rainyday';
import YoungAdult from '../app/screens/youngadult';
import Bless200 from '../app/screens/budgetpages/biweekly/200less';
import B200to400 from '../app/screens/budgetpages/biweekly/200to400';
import B400to600 from '../app/screens/budgetpages/biweekly/400to600';
import B600to800 from '../app/screens/budgetpages/biweekly/600to800';
import B800to1000 from '../app/screens/budgetpages/biweekly/800to1000';
import B1000to2000 from '../app/screens/budgetpages/biweekly/1000to2000';
import B2000more from '../app/screens/budgetpages/biweekly/2000more';
import B600more from '../app/screens/budgetpages/biweekly/600more';
import B200less from '../app/screens/budgetpages/biweekly/200less';

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
      <Stack.Screen 
        name="Bless200" 
        component={Bless200} 
        options={{ title: 'Less than 200' }}
      />
      <Stack.Screen 
        name="B200to400" 
        component={B200to400} 
        options={{ title: '200 to 400' }}
      />
      <Stack.Screen 
        name="B400to600" 
        component={B400to600} 
        options={{ title: '400 to 600' }}
      />
      <Stack.Screen 
        name="B600to800" 
        component={B600to800} 
        options={{ title: '600 to 800' }}
      />
      <Stack.Screen 
        name="B800to1000" 
        component={B800to1000} 
        options={{ title: '800 to 1000' }}
      />
      <Stack.Screen 
        name="B1000to2000" 
        component={B1000to2000} 
        options={{ title: '1000 to 2000' }}
      />
      <Stack.Screen 
        name="B600more" 
        component={B600more} 
        options={{ title: 'more than 600' }}
      />
      <Stack.Screen 
        name="B2000more" 
        component={B2000more} 
        options={{ title: 'more than 2000' }}
      />
      <Stack.Screen 
        name="B200less" 
        component={B200less} 
        options={{ title: 'less than 200' }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
