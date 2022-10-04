import { QueryClient, QueryClientProvider } from 'react-query'
import Todos from './todos'

const queryClient = new QueryClient()

const ReactQueryTest = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  )
}

export default ReactQueryTest