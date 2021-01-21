import React, { Component } from 'react'
import { View } from "react-native"
import { Text } from 'react-native-elements'
import Button from './Button'
import Input from './Input'
import styles from '../utils/styles'
import { connect } from 'react-redux'
import { addDeck } from '../actions'

class NewDeck extends Component {
  state = {
    value: ''
  }

  handleOnPress = () => {
    const { add, goBack } = this.props
    add(this.state.value)
    goBack()
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
    goBack: () => navigation.goBack()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck)
