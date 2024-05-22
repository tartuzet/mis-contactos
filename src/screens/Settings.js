import { View, Text, Button } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'
import { useNavigation } from '@react-navigation/native'



export default function Settings() {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Settings</Text>
      <Button title="ir a Home" onPress={()=>navigation.navigate('Home')} />
    </View>
  )
}