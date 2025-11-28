import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  const [role, setRole] = useState<'alumni' | 'student'>('alumni');
  const [query, setQuery] = useState('');

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

        <View style={styles.searchRow}>
          <View style={styles.searchInputWrap}>
            <Ionicons name="search-outline" size={18} color="#475569" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search alumni..."
              value={query}
              onChangeText={setQuery}
              placeholderTextColor="#94a3b8"
            />
          </View>
          <Pressable style={styles.filterButton}>
            <Ionicons name="funnel-outline" size={18} color="#0f172a" />
          </Pressable>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <ThemedText type="subtitle" style={styles.cardTitle}>John Doe 1</ThemedText>
            <View style={styles.cardActions}>
              <Ionicons name="heart-outline" size={20} color="#0f172a" />
              <Ionicons name="chatbubble-ellipses-outline" size={20} color="#0f172a" />
            </View>
          </View>

          <View style={styles.cardBody}>
            <View style={styles.avatarPlaceholder} />
            <View style={styles.detailBox}>
              <ThemedText style={styles.detailLine}>Graduation: Fall 2026</ThemedText>
              <ThemedText style={styles.detailLine}>Major: B.A. in C.S.</ThemedText>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <ThemedText type="subtitle" style={styles.cardTitle}>John Doe 1</ThemedText>
            <View style={styles.cardActions}>
              <Ionicons name="heart-outline" size={20} color="#0f172a" />
              <Ionicons name="chatbubble-ellipses-outline" size={20} color="#0f172a" />
            </View>
          </View>

          <View style={styles.cardBody}>
            <View style={styles.avatarPlaceholder} />
            <View style={styles.detailBox}>
              <ThemedText style={styles.detailLine}>Graduation: Fall 2026</ThemedText>
              <ThemedText style={styles.detailLine}>Major: B.A. in C.S.</ThemedText>
            </View>
          </View>
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
  searchRow: {
    flexDirection: 'row',
    width: '100%',
    gap: 10,
    alignItems: 'center',
  },
  searchInputWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  filterButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  section: {
    gap: 10,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  cardHeader: {
    backgroundColor: '#d1d5db',
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    marginBottom: 0,
  },
  cardActions: {
    flexDirection: 'row',
    gap: 12,
  },
  cardBody: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
  },
  avatarPlaceholder: {
    width: 80,
    height: 90,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#475569',
    borderRadius: 6,
    backgroundColor: '#f8fafc',
  },
  detailBox: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#475569',
    borderRadius: 6,
    padding: 10,
    justifyContent: 'center',
    gap: 6,
  },
  detailLine: {
    fontSize: 16,
  },
});
