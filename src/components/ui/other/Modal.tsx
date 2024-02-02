import Button from '../buttons/Button';

import { Todo } from '@/interface/global';
export const Modal: React.FC<{
  todoText: string;
  setTodoText: (e: string) => void;
  todoCheck: boolean;
  setTodoCheck: (check: boolean) => void;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}> = ({ todoText, setTodoText, todoCheck, setTodoCheck, setTodos }) => {
  const handleAddTodo = () => {
    if (!todoText.trim()) return;
    setTodoText('');
    const newTodo: Todo = {
      id: Math.floor(Math.random()),
      title: todoText,
      completed: todoCheck,
    };
    setTodos(prev => [...prev, newTodo]);
  };
  return (
    <div className="grid w-full gap-5 rounded-xl bg-white p-3 text-center text-2xl">
      <p>Add your todo:</p>
      <textarea
        className=" min-h-20 w-full rounded-xl bg-gray-200 p-3 text-lg"
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
      />
      <div className="grid grid-cols-[auto,1fr] gap-5">
        <input
          className="my-auto size-10 hue-rotate-[250deg]"
          type="checkbox"
          name=""
          id=""
          checked={todoCheck}
          onClick={() => setTodoCheck(!todoCheck)}
        />
        <Button variant="addTodoModal" onClickHandle={handleAddTodo}>
          Add
        </Button>
      </div>
    </div>
  );
};
