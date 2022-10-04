const API = {
  getTodos: async () => {
    const r = await fetch('/todos')
    return await r.json()
  },
  createTodo: async newTodo => {
    const r = await fetch('/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo)
    })
    return await r.json()
  },
  updateTodo: async updatedTodo => {
    const r = await fetch(`/todos/${updatedTodo.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedTodo)
    })
    return await r.json()
  },
  deleteTodo: async id => {
    const r = await fetch(`/todos/${id}`, {
      method: 'DELETE'
    })
    return await r.json()
  },
}

export default API