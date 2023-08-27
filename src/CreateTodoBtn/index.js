import { TiPlus } from 'react-icons/ti';

/**
 * Este componente sirve para crear nuevos Todos
 * @param {void} onModal estado del modal
 * @param {boolean} stateModal funcion para actualizar el modal
 * @returns {component}
 */

function CreateTodoBtn({ onModal, stateModal }) {
  return (
    <div className='w-full z-10 bg-opacity-10 flex justify-center absolute bottom-5'>
      <div className=' bottom-2 bg-indigo-700 rounded-full w-max p-1'>
        <TiPlus onClick={onModal} className={
          stateModal
            ? 'w-12 h-12 -rotate-45 duration-500 hover:cursor-pointer'
            : 'w-12 h-12 hover:cursor-pointer rotate-90 duration-500'
        } />
      </div>
    </div>
  )
}

export default CreateTodoBtn