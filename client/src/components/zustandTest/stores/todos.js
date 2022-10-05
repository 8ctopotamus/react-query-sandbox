import create from 'zustand'
import API from '../../../utils/api'

const useTodoStore = create(set => ({
  todos: [],
  loading: true,
  getTodos: async () => {
    const todos = await API.getTodos()
    set({ todos, loading: false })
  },
  createTodo: async todo => {
    const newTodo = await API.createTodo(todo)
    // this.getTodos()
    set(state => ({ todos: [...state.todos, newTodo] }))
  },
  updateTodo: async todo => {
    const updatedTodo = await API.updateTodo(todo)
    set(state => {
      const updatedTodos = [...state.todos]
      const todoIdx = updatedTodos.findIndex(({ id }) => id === todo.id)
      updatedTodos.splice(todoIdx, 1, updatedTodo)
      return { todos: updatedTodos }
    })
  },
  deleteTodo: async todoId => {
    const deleted = await API.deleteTodo(todoId)
    if (deleted) {
      set(state => ({
        todos: state.todos.filter(({ id }) => id !== todoId)
      }))
    }
  }
}))

export default useTodoStore