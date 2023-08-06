import { TiPlus } from 'react-icons/ti';

/**
 * Este componente sirve para crear nuevos Todos
 * @param {void} onModal estado del modal
 * @param {boolean} stateModal funcion para actualizar el modal
 * @returns {component}
 */

function CreateTodoBtn({ onModal, stateModal }) {
  return (
    <div className='bg-indigo-700 p-1 rounded-full absolute bottom-10 right-10 z-10'>
      <TiPlus onClick={onModal} className={
        stateModal
          ? 'w-12 h-12 -rotate-45 duration-500 hover:cursor-pointer'
          : 'w-12 h-12 hover:cursor-pointer rotate-90 duration-500'
      } />
    </div>
  )
}

export default CreateTodoBtn