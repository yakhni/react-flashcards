import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { fetchFlashcards } from '../utils/api'
import { connect } from 'react-redux'
import { receiveEntries } from '../actions'
import { ListItem } from 'react-native-elements'
import { Notifications } from 'expo';

// import * as Notifications from 'expo-notifications';

class Decks extends Component {
  componentDidMount () {
    const { dispatch } = this.props
    fetchFlashcards()
      .then((entries) => dispatch(receiveEntries(entries)))
  }

  render() {
    const { entries } = this.props
    return (
      <ScrollView>
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
      </ScrollView>
    )
  }
}

function mapStateToProps(entries) {
  return {
    entries
  }
}
export default connect(mapStateToProps)(Decks)
