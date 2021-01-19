import React from 'react'
import Tabs from './Tabs'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()
export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Decks' component={Tabs} />
    </Stack.Navigator>
  )
}
