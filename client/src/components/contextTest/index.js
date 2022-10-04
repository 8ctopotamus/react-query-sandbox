import { CTXProvider, useCTX } from './testCtx'
import AddTodoForm from '../todos/addTodoForm'
import TodoList from '../todos/todoList'

const Todos = () => {
  const { state, createTodo, updateTodo, deleteTodo } = useCTX()

  return (
    <>
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
    <h1>REACT CONTEXT TODOS</h1>
    <Todos />
  </CTXProvider>
)

export default ContextTest