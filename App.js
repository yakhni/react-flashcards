import * as React from "react"
import { View } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RootStack from './components/Stack'
import StatusBar from './components/StatusBar'
import Tabs from './components/Tabs'
import reducers from './reducers'
import middleware from './middleware'

const store = createStore(reducers, middleware)

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar />
        <View style={{flex: 1}}>
          <RootStack />
        </View>
      </NavigationContainer>
    </Provider>
  )
}
