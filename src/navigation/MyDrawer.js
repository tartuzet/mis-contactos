import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Nofitications from '../screens/Nofitications';
import MyStack from './MyStack';
import { Colors } from '../constans/colors';


const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (

    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor:Colors.secondary,
      }}
    >
        <Drawer.Screen name='Home' component={MyStack} options={{headerShown:false}}/> 
        <Drawer.Screen name='Notifications' component={Nofitications}/> 
    </Drawer.Navigator>

  )
}