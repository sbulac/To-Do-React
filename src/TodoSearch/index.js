import { useContext } from 'react';
import { TfiSearch } from 'react-icons/tfi';
import { TodoContext } from '../TodoContext';


/**
 * Este componente sirve para filtrar los to-dos a partir del useState que se le pasa por parametros.
 * @param {state} searchValue valor del useState "searchValue".
 * @param {state} setSearchValue actualizador del useState "searchValue".
 * @returns {component}
 */

function TodoSearch() {
    const {searchValue, setSearchValue} = useContext(TodoContext)
    return (
        <div className='w-1/3 px-4 flex flex-row-reverse justify-center items-center border border-indigo-400 rounded-xl opacity-60 shadow-2xl shadow-indigo-600/50'>
            <input
                className="w-full p-3 border-none outline-none bg-transparent placeholder:text-indigo-400 text-indigo-400"
                placeholder="Filtrar"
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value)
                }} />
            <TfiSearch className='fill-indigo-400'/>
        </div>
    )
}

export default TodoSearch