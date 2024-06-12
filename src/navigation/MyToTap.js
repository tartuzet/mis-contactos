import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Home from '../screens/Home';
import Contacts from '../screens/Contacts';
import { Colors } from '../constans/colors';


const Tab = createMaterialTopTabNavigator();

export default function MyToTap() {
  return (

    <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle:{
        color: Colors.secondary
      },
      tabBarIndicatorStyle :{
        backgroundColor: Colors.primary,
      }
    
    }}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Contacts' component={Contacts} />

    </Tab.Navigator>
  )
}