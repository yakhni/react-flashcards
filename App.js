import * as React from "react"
import { View } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './components/Stack'
import StatusBar from './components/StatusBar'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <View style={{flex: 1}}>
        <RootStack />
      </View>
    </NavigationContainer>
  )
}
