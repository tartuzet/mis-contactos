import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import {FontAwesome,MaterialIcons} from '@expo/vector-icons'
import { Colors } from '../constans/colors';
import { useNavigation } from '@react-navigation/native';
import MyToTap from './MyToTap';


const MyTab = createBottomTabNavigator();

export default function MyBottomTab() {

  const navigation = useNavigation();
  return (

    <MyTab.Navigator 
    initialRouteName='MyToTap'
    screenOptions={{
        headerTitleAlign:'center',
        tabBarActiveTintColor: Colors.secondary,
    }}>
        <MyTab.Screen 
        name="MyToTap" 
        component={MyToTap} 
        options={{
            tabBarIcon: ({color})=> (<FontAwesome name="home" size={28} color={color}/>),
            headerLeft: () => (
              <Pressable onPress={()=>navigation.openDrawer()}>
                <MaterialIcons name="menu" size={30} color={Colors.secondary} /> 
              </Pressable>)
        }}
        
        />
        <MyTab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
            tabBarBadge:3,
            tabBarIcon: ({color})=>(<FontAwesome name="user" size={28} color={color}  />),
            headerLeft: () => (
              <Pressable onPress={()=>navigation.openDrawer()}>
                <MaterialIcons name="menu" size={30} color={Colors.secondary} /> 
              </Pressable>)
        }}
        
        />

    </MyTab.Navigator>

  )
}