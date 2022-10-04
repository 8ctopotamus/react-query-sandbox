const API = {
  getTodos: async () => {
    const r = await fetch('/todos')
    return await r.json()
  },
  createTodo: async newTodo => {
    const r = await fetch('/todos', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo)
    })
    return await r.json()
  },
  updateTodo: async updatedTodo => {
    console.log(updatedTodo)
    const r = await fetch(`/todos/${updatedTodo.id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTodo)
    })
    return await r.json()
  },
  deleteTodo: async id => {
    const r = await fetch(`/todos/${id}`, {
      headers: { "Content-Type": "application/json" },
      method: 'DELETE'
    })
    return await r.json()
  },
}

export default API