import { TiPlus } from 'react-icons/ti';

/**
 * 
 * @returns {component}
 */

function CreateTodoBtn() {
  return (
    <div className='bg-indigo-700 p-1 rounded-full absolute bottom-10 right-10'>
      <TiPlus className="w-12 h-12 fill-white hover:rotate-180 duration-700 hover:cursor-pointer" />
    </div>
  )
}

export default CreateTodoBtn