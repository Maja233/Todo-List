import { useEffect, useState } from 'react';

import { Todo } from '@/interface/global';

export const UseFetchTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json();
        setTodos(data.slice(0, Math.floor(Math.random() * 10) + 1));
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { loading, setTodos, todos };
};
