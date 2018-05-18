export const SET_STATUS = 'SET_STATUS'
export const setStatus = (text, won) => ({
  type: SET_STATUS,
  text,
  won,
})

export const ADD_INPUT = 'ADD_INPUT'
export const addInput = input => ({
  type: ADD_INPUT,
  input,
})

export const UPDATE_INPUT = 'UPDATE_INPUT'
export const updateInput = input => ({
  type: UPDATE_INPUT,
  input,
})

export const GEN_NUMBER = 'GEN_NUMBER'
export const genNumber = () => ({
  type: GEN_NUMBER,
  number: Math.floor(Math.random() * 100),
})
