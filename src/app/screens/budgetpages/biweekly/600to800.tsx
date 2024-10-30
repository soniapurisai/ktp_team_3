import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '@/src/app/styles/global';

export default function B600to800() {
    return(
        <View style = {globalStyles.container}>
            <Text> 600 to 800 </Text>
        </View>
    )
}