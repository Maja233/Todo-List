import Button from '../buttons/Button';

import { Todo } from '@/interface/global';

export const TodoItem: React.FC<{
  setTodoCheck: (check: boolean) => void;
  todoCheck: boolean;
  handleDeleteTodo: (id: number) => void;
  todo: Todo;
}> = ({ todo, todoCheck, handleDeleteTodo }) => {
  return (
    <li
      key={todo.id}
      className="grid grid-cols-[auto,1fr,auto] items-center gap-2 rounded-xl bg-gray-200 p-2"
    >
      <input
        type="checkbox"
        name=""
        id=""
        className="size-6 hue-rotate-[250deg] "
        checked={todo.completed}
        onClick={() => !todo.completed}
      />
      <p className={todoCheck ? 'line-through' : ''}>
        {todo.title.slice(0, 1).toUpperCase() + todo.title.slice(1)}
      </p>
      <div className="flex gap-2">
        <Button variant="editTodo" onClickHandle={() => ''}>
          Edit
        </Button>
        <Button variant="deleteTodo" onClickHandle={() => handleDeleteTodo(todo.id)}>
          Delete
        </Button>
      </div>
    </li>
  );
};
