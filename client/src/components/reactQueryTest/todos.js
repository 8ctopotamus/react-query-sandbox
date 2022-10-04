import { useQueryClient, useQuery, useMutation } from 'react-query'
import AddTodoForm from '../todos/addTodoForm'
import TodoList from '../todos/todoList'
import API from '../../utils/api'

const Todos = () => {
  const queryClient = useQueryClient()

  const { isLoading, isError, error, data } = useQuery('todos', API.getTodos)

  const onSuccess = () => queryClient.invalidateQueries('todos')
  
  const createMutation = useMutation(API.createTodo, { onSuccess })
  const updateMutation = useMutation(API.updateTodo, { onSuccess })
  const deleteMutation = useMutation(API.deleteTodo, { onSuccess })

  return (
    <>
      <h1>REACT QUERY TODOS</h1>
      <AddTodoForm onSubmit={createMutation.mutate} />
      {isError && <p style={{color: 'red'}}>{error}</p>}
      {isLoading 
        ? <p>Loading...</p> 
        : <TodoList
            todos={data}
            onComplete={updateMutation.mutate}
            onDelete={deleteMutation.mutate}
          />
      }
    </>
  )
}

export default Todos