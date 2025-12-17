import Ionicons from '@expo/vector-icons/Ionicons';
import { collection, query as fsQuery, onSnapshot, where } from 'firebase/firestore';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { db } from '@/firebase/firebase';

export default function HomeScreen() {
  const [role, setRole] = useState<'alumni' | 'student'>('alumni');
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const selectedType = role === 'student' ? 'Student' : 'Alumni';
    const q = fsQuery(collection(db, 'users'), where('type', '==', selectedType));

    setLoading(true);
    setError(null);
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const nextUsers = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as FirestoreUser),
        }));
        setUsers(nextUsers);
        setLoading(false);
      },
      (err) => {
        setUsers([]);
        setLoading(false);
        setError(err.message || 'Failed to load users.');
      }
    );

    return () => unsubscribe();
  }, [role]);

  const filteredUsers = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return users;
    return users.filter((user) => {
      const fields = [user.name, user.major, user.graduation].filter(Boolean).join(' ').toLowerCase();
      return fields.includes(term);
    });
  }, [users, query]);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'right', 'left']}>
      <ThemedView style={styles.container}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
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
              <Ionicons name="search-outline" size={20} color="#6b7280" />
              <TextInput
                style={styles.searchInput}
                placeholder="search alumnis"
                value={query}
                onChangeText={setQuery}
                placeholderTextColor="#9ca3af"
              />
            </View>
            <Pressable style={styles.filterButton}>
              <Ionicons name="options-outline" size={20} color="#1f2937" />
            </Pressable>
          </View>

          {loading && (
            <ThemedText style={styles.statusText}>Loading {role}...</ThemedText>
          )}

          {error && (
            <ThemedText style={[styles.statusText, styles.errorText]}>
              {error}
            </ThemedText>
          )}

          {!loading && !error && filteredUsers.length === 0 && (
            <ThemedText style={styles.statusText}>No {role} found.</ThemedText>
          )}

          {filteredUsers.map((user) => (
            <View key={user.id} style={styles.card}>
              <View style={styles.cardHeader}>
                <ThemedText type="subtitle" style={styles.cardTitle}>
                  {user.name || 'Unnamed'}
                </ThemedText>
                <View style={styles.cardActions}>
                  <Ionicons name="heart-outline" size={22} color="#0f172a" />
                  <Ionicons name="chatbubble-outline" size={22} color="#0f172a" />
                </View>
              </View>

              <View style={styles.cardBody}>
                <View style={styles.avatarPlaceholder}>
                  <Text style={styles.avatarX}>X</Text>
                </View>
                <View style={styles.detailBox}>
                  <ThemedText style={styles.detailLine}>
                    Work: {user.work || 'N/A'}
                  </ThemedText>
                  <ThemedText style={styles.detailLine}>
                    Graduation: {user.graduation || 'N/A'}
                  </ThemedText>
                  <ThemedText style={styles.detailLine}>
                    Major: {user.major || 'N/A'}
                  </ThemedText>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
}

type FirestoreUser = {
  name?: string;
  work?: string;
  graduation?: string;
  major?: string;
  picture?: string;
  type?: string;
};

type UserProfile = FirestoreUser & { id: string };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  content: {
    paddingTop: 24,
    paddingHorizontal: 18,
    paddingBottom: 40,
    gap: 16,
  },
  header: {
    marginBottom: 2,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '700',
  },
  subhead: {
    opacity: 0.8,
    textAlign: 'center',
  },
  toggleRow: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  toggle: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: '#c5cfdb',
    borderRadius: 12,
    paddingVertical: 12,
    backgroundColor: '#eef2f7',
  },
  toggleActive: {
    backgroundColor: '#5f9cf6',
    borderColor: '#5f9cf6',
  },
  toggleLabel: {
    fontWeight: '700',
    textAlign: 'center',
    color: '#475569',
    fontSize: 16,
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
    borderWidth: 2,
    borderColor: '#cfd6df',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1f2937',
  },
  filterButton: {
    width: 80,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#cfd6df',
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  section: {
    gap: 10,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#f4f5f8',
    overflow: 'hidden',
    padding: 12,
  },
  cardHeader: {
    paddingHorizontal: 4,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    marginBottom: 8,
    fontSize: 20,
    fontWeight: '500',
  },
  cardActions: {
    flexDirection: 'row',
    gap: 14,
  },
  cardBody: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 4,
    paddingTop: 2,
  },
  avatarPlaceholder: {
    width: 88,
    height: 92,
    borderWidth: 3,
    borderColor: '#9aa3b1',
    borderRadius: 6,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarX: {
    color: '#9aa3b1',
    fontSize: 36,
    fontWeight: '400',
  },
  detailBox: {
    flex: 1,
    borderWidth: 3,
    borderColor: '#9aa3b1',
    borderRadius: 6,
    padding: 10,
    justifyContent: 'center',
    gap: 6,
    backgroundColor: '#f8fafc',
  },
  detailLine: {
    fontSize: 16,
    color: '#1f2937',
  },
  statusText: {
    textAlign: 'center',
    width: '100%',
    color: '#475569',
  },
  errorText: {
    color: '#b91c1c',
  },
});
