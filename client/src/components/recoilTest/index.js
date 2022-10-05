import { Suspense } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { todoListState, todosCountState } from './atoms/todos'
import AddTodoForm from '../todos/addTodoForm'
import TodoList from '../todos/todoList'
import API from '../../utils/api'

const Todos = () => {
  const todoList = useRecoilState(todoListState)
  const count = useRecoilValue(todosCountState)
  const setTodoList = useSetRecoilState(todoListState)

  const handleSubmit = async todo => {
    const newTodo = await API.createTodo(todo)
    setTodoList(oldTodoList => [
      ...oldTodoList,
      newTodo
    ])
  }

  const handleComplete = async todo => {
    const updatedTodo = await API.updateTodo(todo)
    setTodoList(oldTodoList => {
      const updatedTodoList = [...oldTodoList]
      const idx = updatedTodoList.findIndex(({ id }) => id === todo.id)
      updatedTodoList.splice(idx, 1, updatedTodo)
      return updatedTodoList
    })
  }

  const handleDelete = async id => {
    const deleted = await API.deleteTodo(id)
    if (deleted) {
      setTodoList(oldTodoList => oldTodoList.filter(todo => todo.id !== id))
    }
  }

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <h1>RECOIL TODOS ({count})</h1>
        <AddTodoForm onSubmit={handleSubmit} />
        <TodoList 
          todos={todoList} 
          onComplete={handleComplete}
          onDelete={handleDelete}
        />
      </Suspense>
    </>
  )
}

const RecoilTest = () => (
  <RecoilRoot>
    <Todos />
  </RecoilRoot>
)

export default RecoilTest