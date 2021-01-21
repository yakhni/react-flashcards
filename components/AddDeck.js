import React, { Component } from 'react'
import { View } from "react-native"
import { Text } from 'react-native-elements'
import Button from './Button'
import Input from './Input'
import styles from '../utils/styles'

class AddDeck extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text h4 style={styles.centered}>What is the title of your new Deck?</Text>
        <Input placeholder='Deck Title' />
        <Button title='Create' />
      </View>
    )
  }
}

export default AddDeck
