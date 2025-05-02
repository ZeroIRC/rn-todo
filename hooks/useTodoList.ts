import { useTodoStore } from '../store/useTodoStore';

export const useTodoList = () => {
  const selectedDate = useTodoStore((state) => state.selectedDate);
  const todos = useTodoStore((state) => state.todos);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  const filteredTodos = todos.filter((todo) => todo.date === selectedDate);

  return {
    selectedDate,
    filteredTodos,
    toggleTodo,
    deleteTodo,
  };
}; 