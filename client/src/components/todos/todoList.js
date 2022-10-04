const TodoList = ({ todos = [], onComplete, onDelete }) => todos.map(({ id, complete, text }) => (
  <div key={id} style={{ marginBottom: 20 }}>
    <h4 style={{
      textDecoration: complete ? 'line-through' : 'none',
      color: complete ? 'green' :'inherit'
    }}>{text}</h4>
    <button 
      onClick={() => onComplete({ id, complete: !complete })}
      className={`button ${complete && 'button-outline'}`}
    >
      {complete ? 'Undo' : 'Complete'}
    </button>
    <button 
      onClick={() => onDelete(id)}
      className="button button-outline"
      style={{
        color: 'red',
        borderColor: 'red'
      }}
    >
      X
    </button>
  </div>
))

export default TodoList