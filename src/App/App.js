import TodoCounter from '../TodoCounter';
import TodoItem from '../TodoItem';
import TodoList from '../TodoList';
import TodoSearch from '../TodoSearch';
import CreateTodoBtn from '../CreateTodoBtn';
import TodoItemSkeleton from '../TodoItemSkeleton';
import Modal from '../Modal';
import TodoForm from '../TodoForm';
import { TodoContext, TodoProvider } from '../TodoContext';
import './App.css';

function App() {
  return (
    <TodoProvider>
      <div className='bg-zinc-900 min-h-screen overflow-hidden text-zinc-100 flex flex-col items-center gap-6 p-2'>
        <TodoCounter />
        <TodoSearch />


        <TodoContext.Consumer>
          {({ loading, error, searchedTodos, completeTodo, deleteTodo }) => (
            <TodoList>
              {loading && <TodoItemSkeleton />}
              {error && <p>---error---</p>}
              {(!loading && searchedTodos.length === 0) && <p>No hay pendientes.</p>}
              {searchedTodos.map(item => (
                <TodoItem
                  key={item.text}
                  text={item.text}
                  state={item.state}
                  onComplete={() => completeTodo(item.text)}
                  onDelete={() => deleteTodo(item.text)} />
              ))}
              {/* Lógica para los estados de carga, error, cuando no hay Todos y mostrar los Todos cuando haya */}
            </TodoList>
          )}
        </TodoContext.Consumer>

        <TodoContext.Consumer>
          {({ openModal, modal }) => <CreateTodoBtn onModal={() => openModal()} stateModal={modal} />}
          {/* desde el contexto le pasamos una funcion actualizadora del estado y el estado */}
        </TodoContext.Consumer>
      </div>
      <TodoContext.Consumer>
        {({ modal }) => modal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
        {/* Logica para activar/desactivar el modal por medio de su estado */}
      </TodoContext.Consumer>
    </TodoProvider>
  );
}
export default App;
