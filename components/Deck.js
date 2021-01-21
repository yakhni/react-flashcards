import React, { Component } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import { connect } from 'react-redux'
import Button from './Button'
import styles from '../utils/styles'

class Deck extends Component {
  render() {
    const { title, subtitle } = this.props

    return (
      <View style={styles.mainView}>
        <Text h4 style={styles.centered}>{title}</Text>
        <Text h5 style={styles.centered}>{subtitle} Cards</Text>
        <Button title='Add Card' onPress={() =>
          this.props.navigation.navigate('NewCard', { entryId: title })
        } />
        <Button title='Take Quiz' />
      </View>
    )
  }
}

function mapStateToProps(state, { route }) {
  const { title } = route.params
  return {
    title,
    subtitle: state[title] && state[title].questions.length
  }
}
export default connect(mapStateToProps)(Deck)
