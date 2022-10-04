import { useQueryClient, useQuery, useMutation } from 'react-query'
import API from '../../utils/api'

const Todos = () => {
  const queryClient = useQueryClient()

  const { isLoading, isError, error, data } = useQuery('todos', API.getTodos)

  const updateMutation = useMutation(API.createTodo, {
    onSuccess: () => queryClient.invalidateQueries('todos')
  })

  return (
    <>
      <h1>TODOS</h1>
      {isError && <p style={{color: 'red'}}>{error}</p>}
      {isLoading 
        ? <p>Loading...</p> 
        : data.map(({ id, complete, text }) => {
          return (
            <div key={id}>
              <h4 style={{textDecoration: complete ? 'line-through' : 'none'}}>{text}</h4>
              <button onClick={() => updateMutation.mutate({ id, complete: !complete })}>
                {complete ? 'Incomeplete' : 'Complete'}
              </button>
            </div>
          )
        })
      }
    </>
  )
}

export default Todos