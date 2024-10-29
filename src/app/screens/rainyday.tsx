import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Alert } from 'react-native';
import { globalStyles } from '../styles/global';
import Header from '../shared/header';

export default function RainyDay(){
    return(
        <View style = {globalStyles.container}>
            <Text> Rainy Day </Text>
        </View>

    )};