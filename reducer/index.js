import { ADD_CARD, ADD_ENTRY, RECEIVE_ENTRIES } from '../actions'

function entries (state = {}, action) {
  switch (action.type) {
    case RECEIVE_ENTRIES:
      return {
        ...state,
        ...action.entries
      }
    case ADD_CARD:

      console.log(action)
      const { entryId, entry } = action
      return {
        ...state,
        [entryId]: {
          ...state[entryId],
          questions: state[entryId].questions.concat([entry])
        }
      }
    default:
      return state
  }
}

export default entries
