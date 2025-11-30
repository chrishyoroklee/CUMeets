import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ChatScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'right', 'left']}>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.header}>CU Meets</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 16,
  },
  header: {
    marginBottom: 4,
  },
});