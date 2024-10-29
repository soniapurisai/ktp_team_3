import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import Navigator from '../routes/homestack'
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('../assets/fonts/static/Nunito-Regular.ttf'),
  'nunito-bold': require('../assets/fonts/static/Nunito-Bold.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await getFonts();
      setFontsLoaded(true);
      await SplashScreen.hideAsync(); 
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; 
  }

  return <Navigator />; 
}
