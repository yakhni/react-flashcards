import React from 'react'
import { StyleSheet } from 'react-native'
import { Input as NativeInput } from 'react-native-elements';

export default function Input({ style = {}, ...rest }) {
  return (
    <NativeInput style={[styles.input, style]} {...rest} />
  )
}

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    textAlign: 'center'
   // marginBottom: 10
  }
})
