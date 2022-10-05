import { atom, selector } from 'recoil'

export const todoListState = atom({
  key: 'todosState',
  default: [],
})

export const todosCountState = selector({
  key: 'todosCountState',
  get: ({ get }) => {
    const todos = get(todoListState)
    return todos.length
  }
})