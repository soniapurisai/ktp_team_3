import React from 'react';
import {  Text,  Image, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global';  

function Header() {
  return (
    <ImageBackground source = {require('../../assets/images/game_bg.png')} style = {globalStyles.header}>
        <Text style={globalStyles.headerText}> GameZone </Text>
    </ImageBackground>
  );
}

export default Header;
