import { useState } from 'react';
import { useTodoStore } from '../store/useTodoStore';

export const useTodoInput = () => {
  const [text, setText] = useState('');
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text.trim());
      setText('');
    }
  };

  return {
    text,
    setText,
    handleAddTodo,
  };
}; 