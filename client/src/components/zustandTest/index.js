import { useEffect } from 'react'
import AddTodoForm from '../todos/addTodoForm'
import TodoList from '../todos/todoList'
import useTodoStore from "./stores/todos"

const ZustandTest = () => {
  const todoStore = useTodoStore()
  const todos = useTodoStore(state => state.todos)
  const loading = useTodoStore(state => state.loading)

  useEffect(() => {
    todoStore.getTodos()
  }, [])

  return loading ? <>Loading...</> : (
    <>
      <h1>ZUSTAND TODOS ({todos.length})</h1>
      <AddTodoForm onSubmit={todoStore.createTodo} />
      <TodoList 
        todos={todos} 
        onComplete={todoStore.updateTodo}
        onDelete={todoStore.deleteTodo}
      />
    </>
  )
}

export default ZustandTest