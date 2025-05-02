import { useEffect } from 'react';
import { useTodoStore } from '../store/useTodoStore';

export const useCalendar = () => {
  const todos = useTodoStore((state) => state.todos);
  const selectedDate = useTodoStore((state) => state.selectedDate);
  const setSelectedDate = useTodoStore((state) => state.setSelectedDate);

  // 앱 시작 시 현재 날짜로 설정
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setSelectedDate(today);
  }, []);

  // 날짜 포맷팅
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}년 ${month}월 ${day}일`;
  };

  // 각 날짜별 할 일 개수를 계산
  const markedDates = todos.reduce((acc, todo) => {
    const date = todo.date;
    if (!acc[date]) {
      acc[date] = {
        marked: true,
        dotColor: todo.completed ? '#4CAF50' : '#FF5722',
      };
    }
    return acc;
  }, {} as { [key: string]: { marked: boolean; dotColor: string } });

  return {
    todos,
    selectedDate,
    setSelectedDate,
    formatDate,
    markedDates,
  };
}; 