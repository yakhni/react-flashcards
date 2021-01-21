import React, { Component } from 'react'
import { View, StyleSheet } from "react-native"
import { Text, Button } from 'react-native-elements';
import Input from './Input'
import styles from '../utils/styles'

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

export default AddDeck
