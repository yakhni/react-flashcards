import React, { Component } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import Input from './Input'
import Button from './Button'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import styles from '../utils/styles'
import { submitCard } from '../utils/api'

class NewCard extends Component {
  state = {
    question: '',
    answer: ''
  }

  handleOnPress = () => {
    const { add, goBack, entryId } = this.props
    add(this.state)
    submitCard(entryId, this.state)
    goBack()
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Text h4>Some text goes here</Text>

        <Input placeholder='Question goes here'
               onChangeText={(question) => this.setState({question})}
               value={this.state.question}/>
        <Input placeholder='Answer goes here'
               onChangeText={(answer) => this.setState({answer})}
               value={this.state.answer}/>

        <Button title='Add' onPress={this.handleOnPress}/>
      </View>
    )
  }
}

function mapStateToProps(state, { route }) {
  const { entryId } = route.params;
  return {
    entryId
  }
}

function mapDispatchToProps(dispatch, {route, navigation}) {
  const { entryId } = route.params;
    return {
      add: (entry) => dispatch(addCard(entryId, entry)),
      goBack: () => navigation.goBack()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCard)
