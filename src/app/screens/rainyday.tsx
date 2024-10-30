import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles/global';

export default function RainyDay() {
    const navigation = useNavigation();

    const salary = [
        { title: 'less than 30,000', key: 'B30000less' },
        { title: '30,000-50,000', key: 'B30000to50000' },
        { title: '50,000-60,000', key: 'B50000to60000' },
        { title: '60,000-70,000', key: 'B60000to70000' },
        { title: '70,000-80,000', key: 'B70000to80000' },
        { title: '80,000-90,000', key: 'B80000to90000' },
        { title: 'more than 90,000', key: 'B90000more' }
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
                <Text style={globalStyles.paragraph}>How much do you earn?</Text>
                <FlatList
                    data={salary}
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
