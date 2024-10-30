import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '@/src/app/styles/global';

export default function B1000to2000() {
    return(
        <View style = {globalStyles.container}>
            <Text> 1000 to 2000 </Text>
        </View>
    )
}