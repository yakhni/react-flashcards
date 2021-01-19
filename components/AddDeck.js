import React, { Component } from 'react'
import { View, StyleSheet } from "react-native"
import { Text, Button } from 'react-native-elements';
import Input from './Input'

class AddDeck extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text h4 style={styles.centered}>What is the title of your new Deck?</Text>
        <Input placeholder='Deck Title'/>
        <Button type='solid' title='Create' buttonStyle={{width: 200}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  centered: {
    textAlign: 'center'
  },
  mainView: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})
export default AddDeck
