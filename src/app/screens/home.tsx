import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';

export default function Home() {
    const navigation = useNavigation();
    const [ageRange, setAgeRange] = useState([
        { title: 'High School', key: 'highschool' },
        { title: 'College', key: 'college' },
        { title: 'Young Adult', key: 'youngadult' },
        { title: 'Rainy Day', key: 'rainyday' }
    ]);

    const pressHandler = (key: string) => {
        navigation.navigate(key);
    };

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={ageRange}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => pressHandler(item.key)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
