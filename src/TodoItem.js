function TodoItem({ text, state, onComplete, onDelete }) {

  return (
    <li>
      <span 
      onClick={onComplete}
      style={state?{
        color: 'green'
      }:{
        color: 'black'

      }}>V </span>
      <span style={state?{
        textDecoration: 'underline'
      }:{
        textDecoration: 'none'

      }}>{text}</span>
      <span onClick={onDelete}>❌</span>
    </li>
  )
}

export default TodoItem