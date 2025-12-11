import { StyleSheet, FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

// Mock data based on the wireframe image
const chatData = [
  { id: '1', name: 'Person 1', message: 'Last Message You Sent', time: '8:30PM' },
  { id: '2', name: 'Person 2', message: 'Last Message They Sent', time: '3:23AM' },
  { id: '3', name: 'Person 3', message: 'Last Message You Sent', time: '1 day ago' },
  { id: '4', name: 'Person 4', message: 'Last Message You Sent', time: '2 days ago' },
  { id: '5', name: 'Person 5', message: 'Last Message They Sent', time: '1 week ago' },
  { id: '6', name: 'Person 6', message: 'Last Message You Sent', time: '1+ week ago' },
];

// Component for a single chat item row
const ChatItem = ({ name, message, time }) => (
  <ThemedView style={styles.chatItem}>
    <View style={styles.avatarContainer}>
      <View style={styles.avatar} />
      <ThemedText style={styles.nameText}>{name}</ThemedText>
    </View>
    <View style={styles.messageContainer}>
      <View style={styles.messageBox}>
        <ThemedText numberOfLines={1} style={styles.messageText}>{message}</ThemedText>
      </View>
      <ThemedText style={styles.timeText}>{time}</ThemedText>
    </View>
  </ThemedView>
);

export default function ChatScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'right', 'left']}>
      <ThemedView style={styles.container}>
        <FlatList
          data={chatData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ChatItem {...item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 20,
  },
  chatItem: {
    flexDirection: 'row',
    marginBottom: 24, // Spacing between items
  },
  avatarContainer: {
    alignItems: 'center',
    marginRight: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1.5,
    // Use a themed color if available, otherwise black for the wireframe look
    borderColor: '#000',
    marginBottom: 4,
    backgroundColor: 'transparent', // Placeholder for an image
  },
  nameText: {
    fontSize: 12,
    textAlign: 'center',
  },
  messageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // Align the message box with the top of the avatar
    paddingTop: 6,
  },
  messageBox: {
    borderWidth: 1.5,
    borderColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 12,
    flex: 1,
    marginRight: 12,
    borderRadius: 4, // Slightly rounded corners like in the sketch
  },
  messageText: {
    fontSize: 14,
  },
  timeText: {
    fontSize: 12,
  },
});