import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useTodoInput } from '../hooks/useTodoInput';
import { Calendar } from './Calendar';

export const TodoInput = () => {
  const { text, setText, handleAddTodo, selectedDate, setSelectedDate } = useTodoInput();

  return (
    <View style={styles.container}>
      <Calendar />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="할 일을 입력하세요"
          placeholderTextColor="#999"
        />
        <Button title="추가" onPress={handleAddTodo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
}); 