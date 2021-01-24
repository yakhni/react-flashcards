import React, { Component } from 'react'
import Button from './Button'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import styles from '../utils/styles'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class Result extends Component {
  componentDidMount() {
    clearLocalNotification()
      .then(setLocalNotification);
  }

  render() {
    const { correct, totalQuestions, onPressQuizAgain, onPressMainMenu  } = this.props
    return (
      <View style={styles.mainView}>
        <Text>
          You answered {correct} {totalQuestions > 1
                                  ? 'questions correctly'
                                  : 'question correctly!'}
        </Text>
        <Button title='Take Quiz again' onPress={onPressQuizAgain}/>
        <Button title='Main Menu' onPress={onPressMainMenu}/>
      </View>
    )
  }
}

export default Result
