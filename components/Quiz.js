import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from './Button'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'
import Result from './Result'
import styles from '../utils/styles'

class Quiz extends Component {
  state = {
    isQuestion: 1,
    correct: 0,
    incorrect: 0
  }

  mainMenu = () => {
    this.props.navigation.navigate('Decks')
  }

  reset = () => {
    this.setState({
      correct: 0,
      incorrect: 0
    })
  }

  render() {
    const { questions, totalQuestions, navigation } = this.props
    const { correct, incorrect, isQuestion } = this.state
    const currentQuestionIndex = (correct + incorrect)

    return (currentQuestionIndex === totalQuestions)
      ? (
        <Result
          onPressQuizAgain={this.reset}
          onPressMainMenu={this.mainMenu}
          totalQuestions={totalQuestions}
          correct={correct} />
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
          this.setState({isQuestion: isQuestion ^ 1})}>
          <Text>
            {isQuestion ? 'Answer' : 'Question'}
          </Text>
        </TouchableOpacity>

        <Button title='Correct' onPress={() => this.setState({
          correct: correct + 1
        })}/>

        <Button title='Incorrect' onPress={() => this.setState({
          incorrect: incorrect + 1
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
