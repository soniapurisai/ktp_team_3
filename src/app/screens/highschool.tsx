import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles/global';

export default function HighSchool() {
    const navigation = useNavigation();

    const biWeekly = [
        { title: 'less than 200', key: 'B200less' },
        { title: '200-400', key: 'B200to400' },
        { title: '400-600', key: 'B400to600' },
        { title: 'more than 600', key: 'B600more' }
    ];

    const pressHandler = (key) => {
        navigation.navigate(key);
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>
                Budgeting made for YOU! Find financial effectiveness for the next few weeks with just a few short questions.
            </Text>
            <View style={globalStyles.card}>
                <Text style={globalStyles.paragraph}>How much do you earn bi-weekly?</Text>
                <FlatList
                    data={biWeekly}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={globalStyles.button} onPress={() => pressHandler(item.key)}>
                            <Text style={globalStyles.buttonText}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.key}
                />
            </View>
        </View>
    );
}
