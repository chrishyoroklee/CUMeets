import { StyleSheet, View, ScrollView, Pressable, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ProfileScreen() {
    const name = "Katherine";
    const yearAndMajor = "Sophomore Studying Economics";
    const location = "Lincoln Center";
    const linkedin = "https://www.linkedin.com/in/kat-jones-8374018c9/";
    const github = "https://github.com/katsportfolio";
    const about =
        "Katherine is a sophomore in GS studying economics, with a projected graduation date of May 2028. She has been passionate about finance since a young age, and she hopes to secure a job in sales and trading upon graduation.";

    return (
        <SafeAreaView style={{ flex: 1 }} edges={['top', 'right', 'left']}>
            <ScrollView contentContainerStyle={styles.container}>

                {/* Top navigation row */}
                <View style={styles.navRow}>
                    <Ionicons name="chevron-back" size={24} />
                    <ThemedText style={styles.navLabel}>Directory</ThemedText>
                </View>

                {/* Title */}
                <ThemedText type="title" style={styles.title}>
                    CU Meets
                </ThemedText>

                {/* Avatar section */}
                <View style={styles.avatarWrapper}>
                    <View style={styles.outerCircle}>
                        <View style={styles.innerCircle}>
                            <Ionicons name="person-circle-outline" size={120} color="#000" />
                        </View>
                    </View>
                </View>

                {/* Profile text */}
                <ThemedText type="defaultSemiBold" style={styles.name}>
                    {name}
                </ThemedText>
                <ThemedText style={styles.subText}>{yearAndMajor}</ThemedText>

                {/* Location */}
                <View style={styles.locationRow}>
                    <Ionicons name="location-outline" size={16} />
                    <ThemedText style={styles.locationText}>{location}</ThemedText>
                </View>

                {/* Buttons row */}
                <View style={styles.buttonRow}>
                    <Pressable style={styles.button}>
                        <Ionicons name="add" size={16} />
                        <ThemedText style={styles.buttonText}>Add</ThemedText>
                    </Pressable>

                    <Pressable style={styles.button}>
                        <ThemedText style={styles.buttonText}>Chat</ThemedText>
                        <Ionicons name="chatbubble-outline" size={16} style={{ marginLeft: 4 }} />
                    </Pressable>
                </View>

                {/* Links */}
                <View style={styles.linkRow}>
                    <Ionicons name="link-outline" size={16} />
                    <ThemedText
                        style={styles.link}
                        onPress={() => Linking.openURL(linkedin)}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {linkedin}
                    </ThemedText>
                </View>

                <View style={styles.linkRow}>
                    <Ionicons name="link-outline" size={16} />
                    <ThemedText
                        style={styles.link}
                        onPress={() => Linking.openURL(github)}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {github}
                    </ThemedText>
                </View>

                {/* About section */}
                <View style={styles.aboutSection}>
                    <ThemedText type="subtitle" style={styles.aboutTitle}>
                        About
                    </ThemedText>
                    <ThemedText style={styles.aboutBody}>{about}</ThemedText>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingBottom: 40,
        alignItems: 'center',
    },

    navRow: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 6,
    },

    navLabel: {
        fontSize: 16,
        marginLeft: 2,
    },

    title: {
        textAlign: 'center',
        marginBottom: 12,
    },

    avatarWrapper: {
        alignItems: 'center',
        marginBottom: 10,
    },

    outerCircle: {
        width: 170,
        height: 170,
        borderRadius: 85,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    innerCircle: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    name: {
        marginTop: 10,
        fontSize: 22,
    },

    subText: {
        marginTop: 2,
        fontSize: 15,
    },

    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
        gap: 4,
    },

    locationText: {
        fontSize: 14,
    },

    buttonRow: {
        flexDirection: 'row',
        marginTop: 14,
        gap: 14,
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        gap: 6,
    },

    buttonText: {
        fontSize: 16,
    },

    linkRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
        width: '100%',
    },

    link: {
        marginLeft: 6,
        fontSize: 14,
        color: '#0000EE',
        textDecorationLine: 'underline',
        flexShrink: 1,
    },

    aboutSection: {
        width: '100%',
        marginTop: 26,
    },

    aboutTitle: {
        textAlign: 'center',
        marginBottom: 8,
        fontSize: 20,
    },

    aboutBody: {
        fontSize: 15,
        lineHeight: 22,
        opacity: 0.85,
    },
});