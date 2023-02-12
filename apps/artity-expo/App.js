import { greeting } from 'cool-package';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [title, setTitle] = useState('Note title')
  const [content, setContent] = useState('* Note content')

  return (
    <View style={styles.container}>
      <Text>{greeting}</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={styles.titleInput}
      />
      <TextInput
        value={content}
        onChangeText={setContent}
        editable
        multiline
        style={styles.contentInput}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  titleInput: {
  },
  contentInput: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
