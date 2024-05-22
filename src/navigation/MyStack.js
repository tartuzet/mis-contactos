import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Settings from '../screens/Settings';
import { View, Text } from 'react-native';
import { Colors } from '../constans/colors';
import MyBottomTab from './MyBottomTab';

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
const myConfig = {
    headerShown:false,
    // header: ({ route }) => <CustomHeader title={route.name} /> , 
    presentation: 'modal'};


export default function MyStack() {
    return (
        <HomeStack.Navigator initialRouteName='Home' screenOptions={myConfig}>

            <HomeStack.Screen name='MyBottomTab' component={MyBottomTab} />

            <HomeStack.Group screenOptions={{headerShown:true}}>
            <HomeStack.Screen name='Settings' component={Settings} options={{headerBackTitle:'Home'}}/>
            </HomeStack.Group>

        </HomeStack.Navigator>
    )
}