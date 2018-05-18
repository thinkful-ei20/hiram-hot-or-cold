import { SET_STATUS, ADD_INPUT, UPDATE_INPUT, GEN_NUMBER } from '../actions'

const initialState = {
  num: Math.floor(Math.random() * 100),
  input: '',
  inputs: [],
  status: { text: 'Make your Guess!', won: false },
}

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS:
      return { ...state, status: { text: action.text, won: action.won } }
    case UPDATE_INPUT:
      return { ...state, input: action.input }
    case ADD_INPUT:
      return { ...state, inputs: [...state.inputs, action.input] }
    case GEN_NUMBER:
      return { ...state, num: action.number }
    default:
      return state
  }
}
