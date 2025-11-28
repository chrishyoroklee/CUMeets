import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  const [role, setRole] = useState<'alumni' | 'student'>('alumni');

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'right', 'left']}>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.header}>CU Meets</ThemedText>

        <View style={styles.toggleRow}>
          <Pressable
            style={[styles.toggle, role === 'alumni' && styles.toggleActive]}
            onPress={() => setRole('alumni')}
          >
            <ThemedText style={[styles.toggleLabel, role === 'alumni' && styles.toggleLabelActive]}>
              Alumni
            </ThemedText>
          </Pressable>
          <Pressable
            style={[styles.toggle, role === 'student' && styles.toggleActive]}
            onPress={() => setRole('student')}
          >
            <ThemedText style={[styles.toggleLabel, role === 'student' && styles.toggleLabelActive]}>
              Student
            </ThemedText>
          </Pressable>
        </View>

        <View style={styles.section}>
          <ThemedText type="subtitle">John Doe</ThemedText>
          <ThemedText style={styles.linkDetail}>Software Engineer at TechCorp</ThemedText>
        </View>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 16,
    alignItems: 'center',
  },
  header: {
    marginBottom: 4,
    textAlign: 'center',
  },
  subhead: {
    opacity: 0.8,
    textAlign: 'center',
  },
  toggleRow: {
    flexDirection: 'row',
    gap: 12,
  },
  toggle: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#c8c8c8',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  toggleActive: {
    backgroundColor: '#0f172a',
    borderColor: '#0f172a',
  },
  toggleLabel: {
    fontWeight: '600',
    textAlign: 'center',
  },
  toggleLabelActive: {
    color: '#ffffff',
  },
  section: {
    gap: 10,
    alignItems: 'center',
  },
  card: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    padding: 12,
    gap: 4,
  },
  linkRow: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    padding: 12,
    gap: 2,
  },
  linkDetail: {
    opacity: 0.8,
    textAlign: 'center',
  },
});
