import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { fetchCalendarResults } from '../utils/api'
import { connect } from 'react-redux'
import { receiveEntries, addEntry } from '../actions'
import { ListItem } from 'react-native-elements'

class Decks extends Component {
  componentDidMount () {
    const { dispatch } = this.props
    fetchCalendarResults()
      .then((entries) => dispatch(receiveEntries(entries)))
  }

  render() {
    const { entries } = this.props
    return (
      <View>
        {Object.keys(entries).map((deck, i) => (
          <ListItem key={i} bottomDivider
              onPress={() => this.props.navigation.navigate(
                'Deck', { title: entries[deck].title })}>
            <ListItem.Content>
              <ListItem.Title>{entries[deck].title}</ListItem.Title>
              <ListItem.Subtitle>{entries[deck].questions.length} Cards</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          ))}
      </View>
    )
  }
}

function mapStateToProps(entries) {
  return {
    entries
  }
}
export default connect(mapStateToProps)(Decks)
