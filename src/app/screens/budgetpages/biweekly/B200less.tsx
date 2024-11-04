import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '@/src/app/styles/global';

export default function B200less() {
    return(
        <View style = {globalStyles.container}>
           <Text style = {globalStyles.titleText}> For an income of less than 200 bi-weekly, here is a goal of how you should be spending your money: </Text>
            <Image source = {require( '../../../../assets/images/PieCharts/HighSchool/200.png' )} style = {globalStyles.headerImage} />
        </View>
    )
}