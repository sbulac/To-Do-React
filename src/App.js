import TodoCounter from './TodoCounter';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import TodoSearch from './TodoSearch';
import CreateTodoBtn from './CreateTodoBtn';
import { useState } from 'react';
import './App.css';

function App() {


  let todoList = [
    { text: 'Tarea 1', state: true },
    { text: 'Tarea 2', state: true },
    { text: 'Tarea 3', state: false },
    { text: 'Tarea 4', state: false },
    { text: 'Tarea 5', state: false },
  ]

  const [todos, setTodos] = useState(todoList) // useState para manipular todos los to-dos.
  const [searchValue, setSearchValue] = useState('') // useState para manipular el search bar y poder filtrar el/los to-do/s. (Linea 34 - 39)

  const completedTodos = todos.filter(item => !!item.state).length // hacemos uso del metodo filter para filtrar todos los to-dos que tienen un 'state' en true
  const totalTodos = todos.length // sacamos el numero de to-dos (cada objeto) que hay en el Array 'todoList' 

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase()
    const searchText = searchValue.toLowerCase()
    return todoText.includes(searchText)
  }) 
  /* creamos una variable donde filtramos los to-dos y por cada to-do sacamos el 'text' que lleva almacenado para poder evaluarlo con el searchValue 
  si dentro de la variable todoText se incluye lo que hay en el estado searchText va a hacer un return de ese/esos to-do/s */

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)
    newTodos[todoIndex].state = !newTodos[todoIndex].state
    setTodos(newTodos)
  }

  /* Hacemos una copia de todos los to-dos en la linea 35 y los almacenamos en newTodos, seguido de esto almacenamos el index del to-do que queremos modificar
  para identificarlo. Recuerden que necesitamos algo totalmente UNICO para diferenciarlos, en este caso podemos tener el texto del to-do como id unico, ahora en el 
  metodo findIndex recorremos el array de newTodos y por cada to-do vas a mirar el texto del to-do copia y el texto que te estoy pasando en la funcion completeTodo. Con el indice
  lo que haremos será cambiar el estado de ese to-do y reasignarlo. Seguido de eso actualizaremos todos nuestros to-dos con la copia que hemos modificado*/

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  } // Utilizamos la misma logica para obtener cada elemento y lo que hacemos es eliminar ese elemento con el metodo splice


  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map(item => (
          <TodoItem key={item.text} text={item.text} state={item.state} onComplete={() => completeTodo(item.text)} onDelete={() => deleteTodo(item.text)} />
        ))}
      </TodoList>

      <CreateTodoBtn />
    </>
  );
}

export default App;
