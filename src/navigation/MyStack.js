import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import { View, Text } from 'react-native';
import { Colors } from '../constans/colors';

const HomeStack = createStackNavigator();
function CustomHeader({ title }) {
    return (
        <View
            style={{
                height: 80,
                width: '100%',
                backgroundColor: Colors.secondary,
                padding: 10,
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: Colors.ligth,
                }}
            >
                {title}
            </Text>
        </View>
    )
}
const myConfig = {header: ({ route }) => <CustomHeader title={route.name} /> };


export default function MyStack() {
    return (
        <HomeStack.Navigator initialRouteName='Home' screenOptions={myConfig}>
            <HomeStack.Screen name='Home' component={Home} />
            <HomeStack.Screen name='Settings' component={Settings} />
        </HomeStack.Navigator>
    )
}