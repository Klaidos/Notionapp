import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import useGameStore from './src/store/gameStore';
import { COLORS } from './src/utils/theme';

export default function App() {
  const loadState = useGameStore((s) => s.loadState);
  const isLoaded = useGameStore((s) => s.isLoaded);

  useEffect(() => {
    loadState();
  }, []);

  if (!isLoaded) {
    return (
      <View style={styles.loading}>
        <Text style={styles.loadingEmoji}>⚡</Text>
        <Text style={styles.loadingTitle}>Newsletter Quest</Text>
        <ActivityIndicator color={COLORS.primary} style={{ marginTop: 24 }} />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: COLORS.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingEmoji: {
    fontSize: 60,
    marginBottom: 16,
  },
  loadingTitle: {
    color: COLORS.textPrimary,
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 1,
  },
});
