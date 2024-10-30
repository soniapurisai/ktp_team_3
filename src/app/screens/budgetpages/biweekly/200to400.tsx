import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '@/src/app/styles/global';

export default function B200to400() {
    return(
        <View style = {globalStyles.container}>
            <Text> 200 to 400 </Text>
        </View>
    )
}