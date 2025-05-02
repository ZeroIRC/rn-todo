import { StyleSheet, View } from 'react-native';
import { Calendar as RNCalendar } from 'react-native-calendars';
import { useTodoStore } from '../store/useTodoStore';

export const Calendar = () => {
  const todos = useTodoStore((state) => state.todos);
  const selectedDate = useTodoStore((state) => state.selectedDate);
  const setSelectedDate = useTodoStore((state) => state.setSelectedDate);

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

  return (
    <View style={styles.container}>
      <RNCalendar
        markedDates={{
          ...markedDates,
          [selectedDate]: {
            ...markedDates[selectedDate],
            selected: true,
          },
        }}
        onDayPress={(day) => setSelectedDate(day.dateString)}
        theme={{
          todayTextColor: '#2196F3',
          selectedDayBackgroundColor: '#2196F3',
          dotColor: '#FF5722',
          arrowColor: '#2196F3',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
}); 