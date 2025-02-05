import React from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskList = ({ tasks, toggleTask }) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => toggleTask(item.id)}>
          <Text style={[styles.task, item.done && styles.taskDone]}>{item.text}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  task: { fontSize: 18, padding: 10, borderBottomWidth: 1 },
  taskDone: { textDecorationLine: 'line-through', color: 'gray' },
});

export default TaskList;
