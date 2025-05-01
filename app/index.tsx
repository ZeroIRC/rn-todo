import { StatusBar, StyleSheet, View } from "react-native";
import { TodoInput } from "../components/TodoInput";
import { TodoList } from "../components/TodoList";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.content}>
        <TodoInput />
        <TodoList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
