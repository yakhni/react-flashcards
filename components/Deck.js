import React, { Component } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import { connect } from 'react-redux'
import Button from './Button'
import styles from '../utils/styles'

const Deck = ({ title, subtitle, navigation }) => (
  <View style={styles.mainView}>
    <Text h4 style={styles.centered}>{title}</Text>
    <Text h5 style={styles.centered}>{subtitle} Cards</Text>
    <Button title='Add Card' onPress={() =>
      navigation.navigate('NewCard', { entryId: title })
    } />
    {(subtitle)
      ? <Button title='Take Quiz' onPress={() =>
      navigation.navigate('Quiz', {title})} />

     : (
       <>
        <Text>Please add a few cards to this deck</Text>
        <Text>So you can quiz yourself!</Text>
       </>
     )
    }
  </View>
)

function mapStateToProps(state, { route }) {
  const { title } = route.params
  return {
    title,
    subtitle: state[title] && state[title].questions.length
  }
}
export default connect(mapStateToProps)(Deck)
