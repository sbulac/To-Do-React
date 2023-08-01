/**
 * Componente que muestra el numero total de to-dos y el numero de to-dos completados.
 * @param {number} total numero total de to-dos.
 * @param {number} completed numero de to-dos completados.
 * @returns {component}
 */

function TodoCounter({total, completed}) {
  return (
    <h1>Has completado {completed} de {total} TODOs</h1>
  )
}

export default TodoCounter