import React, { useContext, useState } from 'react'
import { TodoContext } from '../TodoContext'

export const TodoForm = () => {
    const { openModal, addTodo } = useContext(TodoContext) // Traemos la funcion actualizadora del estado del modal, y la funcion para agregar Todos
    const [newTodoValue, setNewTodoValue] = useState('') // Un estado para guardar el valor del Todo

    const onSumbit = (e) => {
        e.preventDefault() // evitamos que se reinicie la página
        addTodo(newTodoValue) // agregamos el nuevo texto del todo y se lo enviamos a la funcion addTodo()
        openModal(false) // cerramos el modal
    }
    const onCancel = () => {
        openModal(false) // cerramos el modal
    }
    const onChange = (e) => {
        setNewTodoValue(e.target.value) // guardamos en el estado local el valor del textarea
    }
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault() // evitamos que se reinicie la pagina
            }}
            className='flex flex-col bg-indigo-700 p-3 rounded-md w-full h-60 items-center gap-4 shadow-2xl shadow-indigo-600/50'>
            <label className='text-2xl font-semibold'>Escribe un Todo</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                className='w-full h-32 rounded-sm outline-none text-black p-2'
                placeholder='Escribe una tarea...' />
            <div className='flex gap-6'>
                <button
                    type=''
                    onClick={onCancel}
                    className='bg-indigo-900 lg:bg-opacity-20 p-2 rounded-md w-24 font-semibold duration-300 hover:bg-opacity-90 hover:shadow hover:shadow-indigo-900/50'
                    id='cancel'>Cancelar</button>
                <button
                    type='submit'
                    onClick={onSumbit}
                    className='bg-slate-50 p-2 lg:bg-opacity-80 rounded-md w-24 text-indigo-700 font-semibold duration-300 hover:bg-opacity-100 hover:shadow hover:shadow-slate-50/50'
                    id='create'>Crear</button>
            </div>
        </form>
    )
}

export default TodoForm