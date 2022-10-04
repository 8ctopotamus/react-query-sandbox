const router = require('express').Router()
const { v4: uuidv4 } = require('uuid')

let todos = [
  {
    id: uuidv4(),
    text: 'Walk dog',
    complete: false,
  },
  {
    id: uuidv4(),
    text: 'Buy juice',
    complete: false,
  },
  {
    id: uuidv4(),
    text: 'Learn math',
    complete: false,
  },
]

router.get('/todos', (req, res) => {
  res.json(todos)
})

router.post('/todos', (req, res) => {
  const newTodo = {
    ...req.body,
    id: uuidv4(),
    complete: false,
  }
  todos.push(newTodo)
  res.json(newTodo)
})

router.put('/todos/:id', (req, res) => {
  let todoIdx = todos.findIndex(({ id }) => id === req.params.id)
  if (todoIdx > -1) {
    let updatedTodo = todos[todoIdx]
    updatedTodo = { ...updatedTodo, ...req.body }
    todos.splice(todoIdx, 1, updatedTodo)
    res.json(updatedTodo)
  } else {
    res.status(404).json({ error: 'todo not found' })
  }
})

router.delete('/todos/:id', (req, res) => {
  const todoIdx = todos.findIndex(({ id }) => id === req.params.id)
  if (todoIdx > -1) {
    todos = todos.filter(({ id }) => id !== req.params.id)
    res.json(true)
  } else {
    res.status(404).json(false)
  }
})

module.exports = router