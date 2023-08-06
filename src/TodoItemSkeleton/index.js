

/**
 * Componente que dicta la estructura de todos los to-dos.
 * @param {String} text texto del to-do.
 * @param {Boolean} state estado del to-do
 * @param {Function} onComplete funcion para completar el to-do disparado por un onClick
 * @param {Function} onDelete funcion para eliminar el to-do disparado por un onClick
 * @returns {component}
 */



function TodoItemSkeleton() {
  return (
    <>
      <li className="flex items-center  bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 animate-pulse w-3/6 h-14 rounded-xl"></li>
      <li className="flex items-center  bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 animate-pulse w-3/6 h-14 rounded-xl"></li>
      <li className="flex items-center  bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 animate-pulse w-3/6 h-14 rounded-xl"></li>
      <li className="flex items-center  bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 animate-pulse w-3/6 h-14 rounded-xl"></li>
      <li className="flex items-center  bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 animate-pulse w-3/6 h-14 rounded-xl"></li>
    </>
  )
}

export default TodoItemSkeleton