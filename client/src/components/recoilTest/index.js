import { RecoilRoot } from 'recoil'


const Todos = () => {
  return (
    <>
      <h1>RECOIL TODOS</h1>
      {/* <AddTodoForm />
      <TodoList todos={todos} /> */}
    </>
  )
}

const RecoilTest = () => (
  <RecoilRoot>
    <Todos />
  </RecoilRoot>
)

export default RecoilTest