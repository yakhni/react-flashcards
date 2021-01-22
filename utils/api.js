import { AsyncStorage } from 'react-native'
import { formatResults, FLASHCARDS_STORAGE_KEY } from './_flashcards'

export function fetchFlashcards () {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(formatResults)
}
export function submitCard (title, card) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      const newData = {
        ...data,
          [title]: {
          ...data[title],
          questions: data[title].questions.concat([card])
        }
      }
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(newData))
    })
}

export function clear() {
  return AsyncStorage.clear();
}
export function submitDeck (deckTitle)  {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(
    { [deckTitle]: {
      title: deckTitle, questions: []
      }
    }
  ))
}
