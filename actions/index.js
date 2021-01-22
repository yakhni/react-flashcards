export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'

export function receiveEntries (entries) {
  return {
    type: RECEIVE_ENTRIES,
    entries
  }
}

export function addCard (entryId, entry) {
  return {
    type: ADD_CARD,
    entryId,
    entry
  }
}

export function addDeck (title) {
  return {
    type: ADD_DECK,
    title
  }
}
