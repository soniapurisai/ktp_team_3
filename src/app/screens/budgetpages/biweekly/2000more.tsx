import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '@/src/app/styles/global';

export default function B2000more() {
    return(
        <View style = {globalStyles.container}>
            <Text> 2000 More </Text>
        </View>
    )
}