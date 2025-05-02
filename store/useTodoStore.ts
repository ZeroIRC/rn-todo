import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  date: string; // YYYY-MM-DD 형식
}

interface TodoStore {
  todos: Todo[];
  selectedDate: string;
  addTodo: (text: string, date: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  getTodosByDate: (date: string) => Todo[];
  setSelectedDate: (date: string) => void;
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set, get) => ({
      todos: [],
      selectedDate: new Date().toISOString().split('T')[0],
      addTodo: (text: string, date: string) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: Date.now().toString(),
              text,
              completed: false,
              date,
            },
          ],
        })),
      toggleTodo: (id: string) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        })),
      deleteTodo: (id: string) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      getTodosByDate: (date: string) => {
        return get().todos.filter((todo) => todo.date === date);
      },
      setSelectedDate: (date: string) => set({ selectedDate: date }),
    }),
    {
      name: 'todo-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
); 