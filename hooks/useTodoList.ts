import { useTodoStore } from '../store/useTodoStore';

export const useTodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  return {
    todos,
    toggleTodo,
    deleteTodo,
  };
}; 