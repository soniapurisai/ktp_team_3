import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '@/src/app/styles/global';

export default function B50000to60000RainyDay() {
    return(
        <View style = {globalStyles.container}>
            <Text style = {globalStyles.titleText}> For an income between 50,000 and 60,000, here is a goal of how you should be spending your money: </Text>
            <Image source = {require( '../../../assets/images/PieCharts/RainyDay/56.png' )} style = {globalStyles.headerImage} />
        </View>
    )
}