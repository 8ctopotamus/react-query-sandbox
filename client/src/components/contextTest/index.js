import { CTXProvider, useCTX } from './testCtx'
import AddTodoForm from '../todos/addTodoForm'
import TodoList from '../todos/todoList'

const Todos = () => {
  const { state, createTodo, updateTodo, deleteTodo } = useCTX()

  return (
    <>
      <h1>REACT CONTEXT TODOS ({state.todos.length})</h1>
      <AddTodoForm onSubmit={createTodo} />
      <TodoList
        todos={state.todos}
        onComplete={updateTodo}
        onDelete={deleteTodo}
      />
    </>
  )
}

const ContextTest = () => (
  <CTXProvider>
    <Todos />
  </CTXProvider>
)

export default ContextTest