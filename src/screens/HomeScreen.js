import React from 'react'
import {View, Text} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import ProductScreen from './ProductScreen'
import UserScreen from './UserScreen'

const Stack = createStackNavigator()

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="User" component={UserScreen} />
    </Stack.Navigator>
  )
}

export default HomeScreen
