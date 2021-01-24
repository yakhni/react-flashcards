import React, { Component } from 'react'
import { View } from "react-native"
import { Text } from 'react-native-elements'
import Button from './Button'
import Input from './Input'
import styles from '../utils/styles'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { submitDeck } from '../utils/api'

class NewDeck extends Component {
  state = {
    value: ''
  }

  handleOnPress = () => {
    const { add, goBack, pop } = this.props
    add(this.state.value)
    submitDeck(this.state.value)
    goBack(this.state.value)
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Text h4 style={styles.centered}>What is the title of your new Deck?</Text>

        <Input placeholder='Deck Title'
               value={this.state.value}
               onChangeText={(value) => this.setState({value})} />

        <Button title='Create' onPress={this.handleOnPress} />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch, {route, navigation}) {
  return {
    add: (title) => dispatch(addDeck(title)),
    goBack: (title) => navigation.navigate('Deck', { title }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck)
