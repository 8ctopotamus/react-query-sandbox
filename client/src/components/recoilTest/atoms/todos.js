import { atom, selector } from 'recoil'
import API from '../../../utils/api'

export const todoListState = atom({
  key: 'todosState',
  default: [],
  // effects: [
  //   async ({ setSelf }) => {
  //     const todos = await API.getTodos()
  //     console.log(todos)
  //     setSelf(todos)
  //     return () => {console.log('Cleanup')}
  //   }
  // ] 
})

export const todosCountState = selector({
  key: 'todosCountState',
  get: ({ get }) => {
    const todos = get(todoListState)
    return todos.length
  }
})