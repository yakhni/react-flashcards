import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as NativeButton } from 'react-native-elements';

function Button ({ title, style = {}, ...rest }) {
  return (
    <NativeButton type='solid' title={title} buttonStyle={[styles.button, style]} {...rest} />
  )
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    marginTop: 10,
    marginBottom: 10
  }
})

export default Button
