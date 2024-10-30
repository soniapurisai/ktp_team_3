import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '@/src/app/styles/global';

export default function B800to1000() {
    return(
        <View style = {globalStyles.container}>
            <Text>800 to 1000 </Text>
        </View>
    )
}