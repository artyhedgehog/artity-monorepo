import { greeting } from 'cool-package';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";
import NoteView from './components/NoteView';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box alignItems="center" w="100%">
        <NoteView />
      </Box>
      <StatusBar translucent={false} style="light"  />
    </NativeBaseProvider>
  )
}
