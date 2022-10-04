import { useState } from "react"

const AddTodoForm = ({ onSubmit }) => {
  const [text, setText] = useState('')
  return (
    <form onSubmit={e => {
      e.preventDefault()
      onSubmit({ text })
      setText('')
    }}>
      <input 
        value={text}
        onChange={e => setText(e.target.value)}
        type="text" 
        required
      />
      <button>Add</button>
    </form>
  )
}

export default AddTodoForm