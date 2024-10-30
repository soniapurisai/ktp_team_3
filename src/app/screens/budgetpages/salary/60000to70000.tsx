import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '@/src/app/styles/global';

export default function B60000to70000() {
    return(
        <View style = {globalStyles.container}>
            <Text style = {globalStyles.titleText}> For an income between 60,000 and 70,000, here is a goal of how you should be spending your money: </Text>
        </View>
    )
}