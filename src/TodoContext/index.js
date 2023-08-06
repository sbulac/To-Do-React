import { createContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const TodoContext = createContext()

const TodoProvider = ({ children }) => {
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('ToDos_v1', []) // useState que utiliza un customHook "useLocalStorage".

    const [searchValue, setSearchValue] = useState('') // useState para manipular el search bar y poder filtrar el/los to-do/s.

    const [modal, setModal] = useState(false) // useState para manipular si está abierto o cerrado el modal.

    const openModal = () => setModal(!modal) // Cada vez que se ejecute esta funcion se actualiza el estado al contrario del actual

    const addTodo = (text) => {
        todos.push({text: text, state: false})
        saveTodos([...todos])
        // Agrega un nuevo todo en el useState y despues se pasan todos los todos al localStorage
    }

    const completedTodos = todos.filter(item => !!item.state).length // hacemos uso del metodo filter para filtrar todos los to-dos que tienen un 'state' en true

    const totalTodos = todos.length // sacamos el numero de to-dos (cada objeto) que hay en el Array "todoList"

    const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase()
        const searchText = searchValue.toLowerCase()
        return todoText.includes(searchText)

        /* se recorre los to-dos y por cada to-do evalua si el texto del to-do incluye el valor del useState "searchText" */
    })

    const completeTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex((todo) => todo.text === text)
        newTodos[todoIndex].state = !newTodos[todoIndex].state
        saveTodos(newTodos)

        /* Hacemos una copia de los to-dos y sacamos el index del to-do que coincida con el texto que mandamos por parametros, cambiamos el estado del to-do y actualizamos el estado de los to-dos*/
    }


    const deleteTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex((todo) => todo.text === text)
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)

        // Utilizamos la misma logica para obtener cada elemento y lo que hacemos es eliminar ese elemento con el metodo splice
    }
    return (
        <TodoContext.Provider value={{
            error,
            loading,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            modal,
            openModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }