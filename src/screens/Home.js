import { View, Text, Button } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={globalStyles.screenContainer}>
            <Text style={globalStyles.title}>Home</Text>
            <Button title='go to settings' onPress={() => navigation.navigate('Settings')} />
        </View>
    )
}