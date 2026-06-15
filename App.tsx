import React from 'react';
import { StatusBar, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';

function StatusBarBackground() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ height: insets.top, backgroundColor: '#1C1B1F', position: 'absolute', top: 0, left: 0, right: 0, zIndex: 999 }} />
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#1C1B1F" barStyle="light-content" translucent={true} />
      <StatusBarBackground />
      <AppNavigator />
    </SafeAreaProvider>
  );
}