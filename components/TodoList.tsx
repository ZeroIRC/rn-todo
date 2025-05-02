import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTodoList } from '../hooks/useTodoList';
import { Todo } from '../store/useTodoStore';

export const TodoList = () => {
  const { filteredTodos, toggleTodo, deleteTodo } = useTodoList();

  const renderItem = ({ item: todo }: { item: Todo }) => (
    <View style={styles.todoItem}>
      <TouchableOpacity
        style={styles.todoTextContainer}
        onPress={() => toggleTodo(todo.id)}
      >
        <Text
          style={[
            styles.todoText,
            todo.completed && styles.completedText,
          ]}
        >
          {todo.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteTodo(todo.id)}
      >
        <Text style={styles.deleteButtonText}>삭제</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredTodos}
        renderItem={renderItem}
        keyExtractor={(todo) => todo.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 10,
    paddingBottom: 20,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  todoTextContainer: {
    flex: 1,
  },
  todoText: {
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  deleteButton: {
    padding: 8,
    backgroundColor: '#ff4444',
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
  },
}); 