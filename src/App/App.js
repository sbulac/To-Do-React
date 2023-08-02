import TodoCounter from '../TodoCounter';
import TodoItem from '../TodoItem';
import TodoList from '../TodoList';
import TodoSearch from '../TodoSearch';
import CreateTodoBtn from '../CreateTodoBtn';
import useLocalStorage from '../hooks/useLocalStorage'
import TodoItemSkeleton from '../TodoItemSkeleton';
import { useState } from 'react';
import './App.css';

function App() {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('ToDos_v1', []) // useState que utiliza un customHook "useLocalStorage".

  const [searchValue, setSearchValue] = useState('') // useState para manipular el search bar y poder filtrar el/los to-do/s.

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
    <div className='bg-zinc-900 h-screen text-zinc-100 flex flex-col items-center p-16 gap-16'>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {loading && <TodoItemSkeleton />}
        {error && <p>---error---</p>}
        {(!loading && totalTodos === 0) && <p>No hay pendientes.</p>}
        {searchedTodos.map(item => (
          <TodoItem
            key={item.text}
            text={item.text}
            state={item.state}
            onComplete={() => completeTodo(item.text)}
            onDelete={() => deleteTodo(item.text)} />
        ))}
      </TodoList>

      <CreateTodoBtn />
    </div>
  );
}
export default App;
