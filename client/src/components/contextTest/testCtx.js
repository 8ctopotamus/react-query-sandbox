import { createContext, useContext, useReducer } from 'react'

const defaultCTX = {
  cats: 0,
  dogs: 0,
}

const CTX = createContext(defaultCTX)

const reducer = (state, action) => {
  switch(action.type) {
    case 'INCREASE_COUNT':
      return {
        ...state,
        [action.payload]: state[action.payload]++
      }
  }

  return state
}

export const CTXProvider = props => {
  const [state, dispatch] = useReducer(reducer, defaultCTX)

  return <CTX.Provider {...props} value={{ state, dispatch }} />
}

export const useCTX = () => useContext(CTX)