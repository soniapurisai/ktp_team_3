import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles/global';

export default function Home() {
    const navigation = useNavigation();

    const ageRange = [
        { title: 'High School', key: 'highschool' },
        { title: 'College', key: 'college' },
        { title: 'Young Adult', key: 'youngadult' },
        { title: 'Rainy Day', key: 'rainyday' }
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
                <Text style={globalStyles.paragraph}>What is the age range of your budgeting?</Text>
                <FlatList
                    data={ageRange}
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
