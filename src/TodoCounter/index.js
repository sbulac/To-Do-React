

/**
 * Componente que muestra el numero total de to-dos y el numero de to-dos completados.
 * @param {number} total numero total de to-dos.
 * @param {number} completed numero de to-dos completados.
 * @returns {component}
 */

function TodoCounter({total, completed}) {
  return (
    <h1 className="text-6xl font-semibold">Has completado <span className="text-indigo-500">{completed}</span>  de <span className="text-indigo-500">{total}</span> TODOs</h1>
  )
}

export default TodoCounter