import { useContext } from "react"
import { TodoContext } from "../TodoContext"


function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext)
  // Traemos el numero de Todos completados y el numero total de Todos pore medio del contexto
  return (
    <h1 className="text-6xl font-semibold max-sm:text-5xl max-sm:text-center md:text-center">Has completado <span className="text-indigo-500">{completedTodos}</span>  de <span className="text-indigo-500">{totalTodos}</span> TODOs</h1>
  )
}

export default TodoCounter