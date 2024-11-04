import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '@/src/app/styles/global';

export default function B400to600YoungAdult() {
    return(
        <View style = {globalStyles.container}>
             <Text style = {globalStyles.titleText}> For an income of between 400 and 600 bi-weekly, here is a goal of how you should be spending your money: </Text>
             <Image source = {require( '../../../../assets/images/PieCharts/YoungAdult/Bi-Weekly/400600.png' )} style = {globalStyles.headerImage} />
        </View>
    )
}