import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from './Button'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'
import styles from '../utils/styles'

class Quiz extends Component {
  state = {
    isQuestion: 1,
    correct: 0,
    incorrect: 0
  }

  render() {
    const { questions, totalQuestions } = this.props
    const { correct, incorrect, isQuestion } = this.state
    const currentQuestionIndex = (correct + incorrect)

    return (currentQuestionIndex === totalQuestions)
      ? (
        <View style={styles.mainView}>
          <Text>
            You answered {this.state.correct} {totalQuestions > 1 ? 'questions' : 'question'}
            correctly!
          </Text>
          <Button title='Take Quiz again' onPress={() => this.setState({
          correct: 0, incorrect: 0
        })}/>
          <Button title='Main Menu' onPress={
            () => this.props.navigation.navigate('Decks')}/>
        </View>
      )

    : (
      <View style={styles.mainView}>
        <Text h4>{currentQuestionIndex}/{totalQuestions}</Text>
        <Text h3 style={{marginBottom: 20}}>
          {isQuestion
            ? questions[currentQuestionIndex].question
            : questions[currentQuestionIndex].answer}
        </Text>

        <TouchableOpacity onPress={()=>
          this.setState({isQuestion: this.state.isQuestion ^ 1})}>
          <Text>
            {isQuestion ? 'Answer' : 'Question'}
          </Text>
        </TouchableOpacity>

        <Button title='Correct' onPress={() => this.setState({
          correct: this.state.correct + 1
        })}/>

        <Button title='Incorrect' onPress={() => this.setState({
          incorrect: this.state.incorrect + 1
        })}/>
      </View>
    )
  }
}

function mapStateToProps(state, { route }) {
  const { title } = route.params
  return {
    questions: state[title].questions,
    totalQuestions: state[title].questions.length
  }
}
export default connect(mapStateToProps)(Quiz)
