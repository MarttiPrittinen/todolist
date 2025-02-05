import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TaskInput = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    addTask(newTask);
    setNewTask('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add new task"
        value={newTask}
        onChangeText={setNewTask}
      />
      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: { flexDirection: 'row', marginBottom: 10 },
  input: { flex: 1, borderWidth: 1, padding: 10, borderRadius: 5, marginRight: 10 },
});

export default TaskInput;
