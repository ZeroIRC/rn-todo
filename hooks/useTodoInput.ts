import { useState } from 'react';
import { useTodoStore } from '../store/useTodoStore';

export const useTodoInput = () => {
  const [text, setText] = useState('');
  const selectedDate = useTodoStore((state) => state.selectedDate);
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text.trim(), selectedDate);
      setText('');
    }
  };

  return {
    text,
    setText,
    handleAddTodo,
    selectedDate,
  };
}; 