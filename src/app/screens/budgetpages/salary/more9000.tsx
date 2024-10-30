import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '@/src/app/styles/global';

export default function Bmore90000() {
    return(
        <View style = {globalStyles.container}>
            <Text> More than 90,000 </Text>
        </View>
    )
}