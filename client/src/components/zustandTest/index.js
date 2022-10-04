import { useEffect } from 'react'
import AddTodoForm from '../todos/addTodoForm'
import TodoList from '../todos/todoList'
import useTodoStore from "./stores/todos"

const ZustandTest = () => {
  const todoStore = useTodoStore()
  const todos = useTodoStore(state => state.todos)

  useEffect(() => {
    todoStore.getTodos()
  }, [])

  return (
    <>
      <h1>ZUSTAND TODOS</h1>
      <AddTodoForm />
      <TodoList todos={todos} />
    </>
  )
}

export default ZustandTest