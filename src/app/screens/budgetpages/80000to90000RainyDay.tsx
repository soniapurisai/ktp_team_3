import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '@/src/app/styles/global';

export default function B80000to90000RainyDay() {
    return(
        <View style = {globalStyles.container}>
            <Text style = {globalStyles.titleText}> For an income between 80,000 and 90,000, here is a goal of how you should be spending your money: </Text>
            <Image source = {require( '../../../assets/images/PieCharts/RainyDay/89.png' )} style = {globalStyles.headerImage} />
        </View>
    )
}