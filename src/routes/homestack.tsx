import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../app/screens/home'; 

import Header from '../app/shared/header'; 
import College from '../app/screens/college';
import HighSchool from '../app/screens/highschool';
import RainyDay from '../app/screens/rainyday';
import YoungAdult from '../app/screens/youngadult';

import B200less from '../app/screens/budgetpages/biweekly/B200less';
import B200to400 from '../app/screens/budgetpages/biweekly/200to400';
import B400to600 from '../app/screens/budgetpages/biweekly/400to600';
import B600more from '../app/screens/budgetpages/biweekly/600more';


import B200lessCollege from '../app/screens/budgetpages/biweekly/B200lessCollege';
import B200to400College from '../app/screens/budgetpages/biweekly/200to400College';
import B400to600College from '../app/screens/budgetpages/biweekly/400to600College';
import B600to800College from '../app/screens/budgetpages/biweekly/600to800College';
import B800to1000College from '../app/screens/budgetpages/biweekly/800to1000College';
import B1000to2000College from '../app/screens/budgetpages/biweekly/1000to2000College';
import B2000moreCollege from '../app/screens/budgetpages/biweekly/2000moreCollege';

import B200lessYoungAdult from '../app/screens/budgetpages/biweekly/B200lessYoungAdult';
import B200to400YoungAdult from '../app/screens/budgetpages/biweekly/200to400YoungAdult';
import B400to600YoungAdult from '../app/screens/budgetpages/biweekly/400to600YoungAdult';
import B600moreYoungAdult from '../app/screens/budgetpages/biweekly/600moreYoungAdult';

import B30000less from '../app/screens/budgetpages/salary/30000less';
import B30000to50000 from '../app/screens/budgetpages/salary/30000to50000';
import B50000to60000 from '../app/screens/budgetpages/salary/50000to60000';
import B60000to70000 from '../app/screens/budgetpages/salary/60000to70000';
import B70000to80000 from '../app/screens/budgetpages/salary/70000to80000';
import B80000to90000 from '../app/screens/budgetpages/salary/80000to90000';
import B90000more from '../app/screens/budgetpages/salary/9000more';

import B30000lessRainyDay from '../app/screens/budgetpages/30000lessRainyDay';
import B30000to50000RainyDay from '../app/screens/budgetpages/30000to50000RainyDay';
import B50000to60000RainyDay from '../app/screens/budgetpages/50000to60000RainyDay';
import B60000to70000RainyDay from '../app/screens/budgetpages/60000to70000RainyDay';
import B70000to80000RainyDay from '../app/screens/budgetpages/70000to80000RainyDay';
import B80000to90000RainyDay from '../app/screens/budgetpages/80000to90000RainyDay';
import B90000moreRainyDay from '../app/screens/budgetpages/90000moreRainyDay';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => ({
        headerTitle: () => <Header navigation={navigation} />
      })}
    >
      {/* Home Route */}
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ title: '' }}
      />
    {/* Main Routes */}
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
{/* High School */}
      <Stack.Screen 
        name="B200less" 
        component={B200less} 
        options={{ title: 'less than 200' }}
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
        name="B600more" 
        component={B600more} 
        options={{ title: 'more than 600' }}
      />
{/* College */}
      <Stack.Screen 
        name="B200lessCollege" 
        component={B200lessCollege} 
        options={{ title: 'Less than 200' }}
      />
      <Stack.Screen 
        name="B200to400College" 
        component={B200to400College} 
        options={{ title: '200 to 400' }}
      />
      <Stack.Screen 
        name="B400to600College" 
        component={B400to600College} 
        options={{ title: '400 to 600' }}
      />
      <Stack.Screen 
        name="B600to800College" 
        component={B600to800College} 
        options={{ title: '600 to 800' }}
      />
      <Stack.Screen 
        name="B800to1000College" 
        component={B800to1000College} 
        options={{ title: '800 to 1000' }}
      />
      <Stack.Screen 
        name="B1000to2000College" 
        component={B1000to2000College} 
        options={{ title: '1000 to 2000' }}
      />
      <Stack.Screen 
        name="B2000moreCollege" 
        component={B2000moreCollege} 
        options={{ title: 'more than 2000' }}
      />
{/* Young Adult */}
      <Stack.Screen 
        name="B200lessYoungAdult" 
        component={B200lessYoungAdult} 
        options={{ title: 'Less than 200' }}
      />
      <Stack.Screen 
        name="B200to400YoungAdult" 
        component={B200to400YoungAdult} 
        options={{ title: '200 to 400' }}
      />
      <Stack.Screen 
        name="B400to600YoungAdult" 
        component={B400to600YoungAdult} 
        options={{ title: '400 to 600' }}
      />
      <Stack.Screen 
        name="B600moreYoungAdult" 
        component={B600moreYoungAdult} 
        options={{ title: 'more than 600' }}
      />

 {/* Salary */}

      <Stack.Screen 
        name="B30000less" 
        component={B30000less} 
        options={{ title: 'less than 30000' }}
      />
      <Stack.Screen 
        name="B30000to50000" 
        component={B30000to50000} 
        options={{ title: '30000-50000' }}
      />
      <Stack.Screen 
        name="B50000to60000" 
        component={B50000to60000} 
        options={{ title: '50000-60000' }}
      />
      <Stack.Screen 
        name="B60000to70000" 
        component={B60000to70000} 
        options={{ title: '60000-70000' }}
      />
      <Stack.Screen 
        name="B70000to80000" 
        component={B70000to80000} 
        options={{ title: '70000-80000' }}
      />
      <Stack.Screen 
        name="B80000to90000" 
        component={B80000to90000} 
        options={{ title: '80000-90000' }}
      />
      <Stack.Screen 
        name="B90000more" 
        component={B90000more} 
        options={{ title: 'more than 90000' }}
      />



<Stack.Screen 
        name="B30000lessRainyDay" 
        component={B30000lessRainyDay} 
        options={{ title: 'less than 30000' }}
      />
      <Stack.Screen 
        name="B30000to50000RainyDay" 
        component={B30000to50000RainyDay} 
        options={{ title: '30000-50000' }}
      />
      <Stack.Screen 
        name="B50000to60000RainyDay" 
        component={B50000to60000RainyDay} 
        options={{ title: '50000-60000' }}
      />
      <Stack.Screen 
        name="B60000to70000RainyDay" 
        component={B60000to70000RainyDay} 
        options={{ title: '60000-70000' }}
      />
      <Stack.Screen 
        name="B70000to80000RainyDay" 
        component={B70000to80000RainyDay} 
        options={{ title: '70000-80000' }}
      />
      <Stack.Screen 
        name="B80000to90000RainyDay" 
        component={B80000to90000RainyDay} 
        options={{ title: '80000-90000' }}
      />
      <Stack.Screen 
        name="B90000moreRainyDay" 
        component={B90000moreRainyDay} 
        options={{ title: 'more than 90000' }}
      />


    </Stack.Navigator>
  );
}

export default HomeStack;
