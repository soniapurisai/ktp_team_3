import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '@/src/app/styles/global';

export default function B90000more() {
    return(
        <View style = {globalStyles.container}>
            <Text style = {globalStyles.titleText}> For an income of over 90,000, here is a goal of how you should be spending your money: </Text>
        </View>
    )
}