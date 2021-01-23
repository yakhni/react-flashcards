import React, { Component } from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RootStack from './components/Stack'
import StatusBar from './components/StatusBar'
import reducer from './reducer'
import middleware from './middleware'

  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <NavigationContainer>
          <StatusBar />
          <View style={{flex: 1}}>
            <RootStack />
          </View>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App
