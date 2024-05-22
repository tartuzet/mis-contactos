import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import {FontAwesome} from '@expo/vector-icons'
import { Colors } from '../constans/colors';

const MyTab = createBottomTabNavigator();

export default function MyBottomTab() {
  return (

    <MyTab.Navigator screenOptions={{
        headerTitleAlign:'center',
        tabBarActiveTintColor: Colors.secondary,
    }}>
        <MyTab.Screen 
        name="Home" 
        component={Home} 
        options={{
            tabBarIcon: ({color})=><FontAwesome name="home" size={28} color={color} />
        }}
        
        />
        <MyTab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
            tabBarIcon: ({color})=><FontAwesome name="user" size={28} color={color} />
        }}
        
        />

    </MyTab.Navigator>

  )
}