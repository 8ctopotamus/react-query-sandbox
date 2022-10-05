const TodoList = ({ todos = [], onComplete, onDelete }) => todos.map(({ id, complete, text }) => (
  <div key={id} style={{ marginBottom: 20 }}>
    <h4 style={{
      textDecoration: complete ? 'line-through' : 'none',
      color: complete ? 'green' :'inherit'
    }}>
      {text}
      <span 
        onClick={() => onDelete(id)}
        style={{
          color: 'red',
          borderColor: 'red',
          margin: 10
        }}
      >
        X
      </span>
    </h4>
    <button 
      onClick={() => onComplete({ id, complete: !complete })}
      className={`button ${complete && 'button-outline'}`}
    >
      {complete ? 'Undo' : 'Complete'}
    </button>
  </div>
))

export default TodoList