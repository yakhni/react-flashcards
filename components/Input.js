import React from 'react'
import { StyleSheet } from 'react-native'
import { Input } from 'react-native-elements';

export default function InputField ({ onChange, style = {} }) {
  return (
    <Input placeholder='Deck Title' style={[styles.input, style]} />
  )
}

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    textAlign: 'center'
   // marginBottom: 10
  }
})
