const Button: React.FC<{
  children: React.ReactNode;
  variant: string;
  onClickHandle: () => void;
}> = ({ children, variant, onClickHandle }) => {
  let classes;
  switch (variant) {
    case 'editTodo':
      classes = 'rounded-xl bg-white px-4 py-2 transition-colors duration-300 hover:bg-blue-300';
      break;
    case 'deleteTodo':
      classes = 'rounded-xl bg-white px-4 py-2 transition-colors duration-300 hover:bg-red-400';
      break;
    case 'addTodo':
      classes =
        'rounded-xl bg-white px-4 py-2 transition-colors duration-300 hover:bg-green-400 uppercase';
      break;
    case 'addTodoModal':
      classes =
        'rounded-xl bg-gray-200 px-4 py-2 transition-colors duration-300 hover:bg-green-400 uppercase';
      break;
    case 'deleteAllTodos':
      classes =
        'rounded-xl bg-white px-4 py-2 transition-colors duration-300 hover:bg-green-400 uppercase';
      break;
    default:
      '';
  }
  return (
    <button onClick={onClickHandle} className={classes}>
      {children}
    </button>
  );
};

export default Button;
