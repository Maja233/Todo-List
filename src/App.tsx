import { useState } from 'react';

import { TodoItem } from './components/ui/other/TodoItem';
import { UseFetchTodos } from './hooks/UseFetchTodos';

import Button from '@/components/ui/buttons/Button';
import { Modal } from '@/components/ui/other/Modal';
function App() {
  const { todos, setTodos, loading } = UseFetchTodos();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [todoText, setTodoText] = useState('');
  const [todoCheck, setTodoCheck] = useState(false);
  const handleDeleteTodo = (TodoID: number) => {
    setTodos(todos.filter(todo => todo.id !== TodoID));
  };
  const handleDeleteAllTodos = () => {
    setTodos([]);
  };

  return (
    <div className="bg-gray-900">
      <div className="container flex min-h-screen max-w-[700px] flex-col items-center justify-center gap-5 p-5">
        {modalIsOpen && (
          <Modal
            todoText={todoText}
            setTodoText={setTodoText}
            todoCheck={todoCheck}
            setTodoCheck={setTodoCheck}
            setTodos={setTodos}
          />
        )}
        {loading ? (
          <p>Loading</p>
        ) : (
          <>
            <ul className="grid w-full gap-2 rounded-xl bg-white p-3">
              {todos.map(todo => (
                <TodoItem
                  todo={todo}
                  setTodoCheck={setTodoCheck}
                  todoCheck={todoCheck}
                  handleDeleteTodo={handleDeleteTodo}
                />
              ))}
              <li className="ml-auto rounded-xl bg-gray-200 px-4 py-2">Todos: {todos.length}</li>
            </ul>
            <div className="flex gap-5 text-2xl">
              <Button variant="addTodo" onClickHandle={() => setModalIsOpen(!modalIsOpen)}>
                Add
              </Button>
              <Button variant="deleteAllTodos" onClickHandle={handleDeleteAllTodos}>
                Delete all
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
