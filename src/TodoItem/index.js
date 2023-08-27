import { TiTick } from 'react-icons/ti';
import { TiTimes } from 'react-icons/ti';


/**
 * Componente que dicta la estructura de todos los to-dos.
 * @param {String} text texto del to-do.
 * @param {Boolean} state estado del to-do
 * @param {Function} onComplete funcion para completar el to-do disparado por un onClick
 * @param {Function} onDelete funcion para eliminar el to-do disparado por un onClick
 * @returns {component}
 */



function TodoItem({ text, state, onComplete, onDelete }) {
  return (
    <li className="flex items-center bg-indigo-700 bg-opacity-40 h-14 rounded-xl relative shadow-md shadow-indigo-600/30 w-5/6">
      <TiTick
        onClick={onComplete}
        className={state ? "fill-green-700 cursor-pointer w-12 h-12" : "fill-slate-100 cursor-pointer w-12 h-12"} />
      <span className={state ? 'line-through text-xl italic' : 'text-xl'}>{text}</span>
      <TiTimes className='fill-red-600 cursor-pointer w-12 h-12 absolute -top-5 -right-4' onClick={onDelete} />
    </li>
  )
}

export default TodoItem