import React, { useContext, useState } from 'react'
import { TodoContext } from '../TodoContext'

export const TodoForm = () => {
    const { openModal, addTodo } = useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = useState('')

    const onSumbit = (e) => {
        e.preventDefault()
        addTodo(newTodoValue)
        openModal(false)
    }
    const onCancel = () => {
        openModal(false)
    }
    const onChange = (e) => {
        setNewTodoValue(e.target.value)
    }
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
            }}
            className='flex flex-col bg-indigo-700 p-5 rounded-md w-1/3 h-64 items-center gap-4 shadow-2xl shadow-indigo-600/50'>
            <label className='text-2xl'>Escribe un Todo</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                className='w-full h-32 rounded-sm outline-none text-black p-2'
                placeholder='Escribe una tarea...' />
            <div className='flex gap-6'>
                <button
                    type=''
                    onClick={onCancel}
                    className='bg-indigo-900 bg-opacity-20 p-2 rounded-md w-24 font-semibold duration-300 hover:bg-opacity-70 hover:shadow hover:shadow-indigo-900/50'
                    id='cancel'>Cancelar</button>
                <button
                    type='submit'
                    onClick={onSumbit}
                    className='bg-slate-50 p-2 bg-opacity-80 rounded-md w-24 text-indigo-700 font-semibold duration-300 hover:bg-opacity-100 hover:shadow hover:shadow-slate-50/50'
                    id='create'>Crear</button>
            </div>
        </form>
    )
}

export default TodoForm