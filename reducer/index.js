import { ADD_CARD, ADD_DECK, RECEIVE_ENTRIES } from '../actions'

function entries (state = {}, action) {
  switch (action.type) {
    case RECEIVE_ENTRIES:
      return {
        ...state,
        ...action.entries
      }
    case ADD_CARD:
      const { entryId, entry } = action
      return {
        ...state,
        [entryId]: {
          ...state[entryId],
          questions: state[entryId].questions.concat([entry])
        }
      }
    case ADD_DECK:
      const { title } = action
      return {
        ...state,
        [title]: {
          questions: [],
          title
        }
      }
    default:
      return state
  }
}

export default entries
