import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Calendar as RNCalendar } from 'react-native-calendars';
import { useTodoStore } from '../store/useTodoStore';

export const Calendar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const todos = useTodoStore((state) => state.todos);
  const selectedDate = useTodoStore((state) => state.selectedDate);
  const setSelectedDate = useTodoStore((state) => state.setSelectedDate);

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

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dateButton}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={styles.dateText}>{formatDate(selectedDate)}</Text>
      </TouchableOpacity>
      {isExpanded && (
        <View style={styles.calendarContainer}>
          <RNCalendar
            markedDates={{
              ...markedDates,
              [selectedDate]: {
                ...markedDates[selectedDate],
                selected: true,
              },
            }}
            onDayPress={(day) => {
              setSelectedDate(day.dateString);
              setIsExpanded(false);
            }}
            theme={{
              todayTextColor: '#2196F3',
              selectedDayBackgroundColor: '#2196F3',
              dotColor: '#FF5722',
              arrowColor: '#2196F3',
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  dateButton: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  calendarContainer: {
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
  },
}); 