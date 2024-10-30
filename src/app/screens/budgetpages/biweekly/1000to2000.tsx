import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '@/src/app/styles/global';

export default function B1000to2000() {
    return(
        <View style = {globalStyles.container}>
             <Text style = {globalStyles.titleText}> For an income of between 1,000 and 2,000 bi-weekly, here is a goal of how you should be spending your money: </Text>
        </View>
    )
}