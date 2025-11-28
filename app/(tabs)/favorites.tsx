import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function FavoritesScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'right', 'left']}>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.header}>CU Meets</ThemedText>
        <ThemedText style={styles.subhead}>Directory of Alumni</ThemedText>

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
    paddingTop: 12,
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 16,
  },
  header: {
    marginBottom: 4,
  },
  subhead: {
    opacity: 0.8,
  },
  section: {
    gap: 10,
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
  },
});
