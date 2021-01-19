import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import AddDeck from './AddDeck'
import Decks from './Decks'

const Tab = Platform.OS === "ios"
  ? createBottomTabNavigator()
  : createMaterialBottomTabNavigator()

const TabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    // activeTintColor: Platform.OS === "ios" ? purple : white,
    style: {
      height: 56,
      // backgroundColor: Platform.OS === "ios" ? white : purple,
      shadowColor: "rgba(0, 0, 0, 0.24)",
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
}

const RouteConfigs = {
  Decks:{
    name: "Decks",
    component: Decks,
    options: {
      tabBarIcon: ({color}) =>
        <Ionicons name='ios-bookmarks' size={20} color={color} />,
      title: 'Decks'
    }
  },
  AddDeck:{
    component: AddDeck,
    name: "Add Deck",
    options: {
      tabBarIcon: ({color}) =>
        <FontAwesome name='plus-square' size={20} color={color} />,
      title: 'Add Deck'
    }
  }
}

export default function Tabs() {
  return (
  <Tab.Navigator {...TabNavigatorConfig} >
    <Tab.Screen {...RouteConfigs['Decks']} />
    <Tab.Screen {...RouteConfigs['AddDeck']} />
  </Tab.Navigator>
  )
}
