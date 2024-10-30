import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '@/src/app/styles/global';

export default function B400to600() {
    return(
        <View style = {globalStyles.container}>
            <Text> 400 to 600 </Text>
        </View>
    )
}