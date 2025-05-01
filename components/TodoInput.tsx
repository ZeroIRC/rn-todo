import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTodoInput } from '../hooks/useTodoInput';

export const TodoInput = () => {
  const { text, setText, handleAddTodo } = useTodoInput();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="할 일을 입력하세요"
        placeholderTextColor="#999"
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAddTodo}
      >
        <Text style={styles.addButtonText}>추가</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
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
  addButton: {
    backgroundColor: '#4646eb',
    borderRadius: 5,
    padding: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
}); 