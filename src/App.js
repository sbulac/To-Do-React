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

  const [todos, setTodos] = useState(todoList)
  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todos.filter(item => !!item.state).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase()
    const searchText = searchValue.toLowerCase()
    return todoText.includes(searchText)
  })

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)
    newTodos[todoIndex].state = !newTodos[todoIndex].state
    setTodos(newTodos)
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }
  

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
