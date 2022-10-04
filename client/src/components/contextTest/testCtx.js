import { createContext, useContext, useEffect, useReducer } from 'react'
import API from '../../utils/api'

const defaultCTX = { todos: [] }

const CTX = createContext(defaultCTX)

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_TODOS':
      return {
        ...state,
        todos: action.payload
      }
    case 'CREATE_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case 'UPDATE_TODO':
      const updatedTask = action.payload
      const taskId = updatedTask.id
      const taskIdx = state.findIndex(({ id }) => id === taskId)
      const todos = [...state.todos]
      todos.splice(taskIdx, 1, updatedTask)
      return {
        ...state,
        todos,
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id !== action.payload)
      }
  }
  return state
}

export const CTXProvider = props => {
  const [state, dispatch] = useReducer(reducer, defaultCTX)

  useEffect(() => {
    getTodos()
  }, [])

  const getTodos = async () => {
    const todos = await API.getTodos()
    dispatch({
      type: 'SET_TODOS',
      payload: todos
    })
  }

  const createTodo = async todo => {
    const newTodo = await API.createTodo(todo)
    dispatch({
      type: 'CREATE_TODO',
      payload: newTodo
    })
  }

  const updateTodo = async todo => {
    const updatedTodo = await API.updateTodos(todo)
    dispatch({
      type: 'UPDATE_TODO',
      payload: updatedTodo,
    })
  }

  const deleteTodo = async todoId => {
    const deleted = await API.deletedTodos(todoId)
    dispatch({
      type: 'DELETE_TODO',
      payload: { id: todoId, deleted }
    })
  }

  return (
    <CTX.Provider 
      {...props} 
      value={{
        state,
        dispatch,
        getTodos,
        createTodo,
        updateTodo,
        deleteTodo,
      }} 
    />
  )
}

export const useCTX = () => useContext(CTX)