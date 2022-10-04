import { useQueryClient, useQuery, useMutation } from 'react-query'
import TodoList from '../todos/todoList'
import API from '../../utils/api'

const Todos = () => {
  const queryClient = useQueryClient()

  const { isLoading, isError, error, data } = useQuery('todos', API.getTodos)

  const onSuccess = () => queryClient.invalidateQueries('todos')
  
  const updateMutation = useMutation(API.updateTodo, { onSuccess })
  const deleteMutation = useMutation(API.deleteTodo, { onSuccess })

  return (
    <>
      <h1>TODOS</h1>
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