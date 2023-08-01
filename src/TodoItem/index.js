import { TiTick } from "react-icons/ti";
import { TiTimes } from "react-icons/ti";


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
    <li>
      <TiTick
        onClick={onComplete}
        style={state ? {
          fill: "green",
          cursor: "pointer"
        } : {
          fill: "black",
          cursor: "pointer"
        }} />
      <span style={state ? {
        textDecoration: 'line-through'
      } : {
        textDecoration: 'none'

      }}>{text}</span>
      <TiTimes style={{ fill: "red", cursor: "pointer" }} onClick={onDelete} />
    </li>
  )
}

export default TodoItem