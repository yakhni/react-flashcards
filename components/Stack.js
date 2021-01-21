import React from 'react'
import Tabs from './Tabs'
import NewCard from './NewCard'
import Deck from './Deck'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()
export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Decks' component={Tabs} />
      <Stack.Screen name='Deck' component={Deck} />
      <Stack.Screen name='NewCard' component={NewCard} />
    </Stack.Navigator>
  )
}
