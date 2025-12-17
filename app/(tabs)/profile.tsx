import { Ionicons } from '@expo/vector-icons';
import { Image, Linking, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import logo from '@/assets/images/logo.png';
import avatar1 from '@/assets/placeholders/avatar1.png';
import { ThemedText } from '@/components/themed-text';

export default function ProfileScreen() {
    const name = "Jonathan";
    const yearAndMajor = "L4 - Software Engineer @ Google";
    const location = "Lower East Side";
    const linkedin = "https://www.linkedin.com/in/john-smith-83407282b1/";
    const github = "https://github.com/jsmith";
    const about =
        "Jonathan has a B.S. in Computer Science. He is a Columbia SEAS Alumnus and he graduated in 2021. In his spare time, Jonathan enjoys cycling and reading fantasy novels. He loves seafood, and his favorite meal is a lobster roll.";

    return (
        <SafeAreaView style={{ flex: 1 }} edges={['top', 'right', 'left']}>
            <ScrollView contentContainerStyle={styles.container}>

                {/* Top navigation row */}
                {/* <View style={styles.navRow}>
                    <Ionicons name="chevron-back" size={24} />
                    <ThemedText style={styles.navLabel}>Directory</ThemedText>
                </View> */}

                {/* Header logo */}
                <View style={styles.headerLogoWrap}>
                    <View style={styles.logoBadge}>
                        <Image source={logo} style={styles.logoImage} />
                    </View>
                </View>

                {/* Avatar section */}
                <View style={styles.avatarWrapper}>
                    <Image source={avatar1} style={styles.profileImage} />
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

    headerLogoWrap: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 12,
        paddingVertical: 8,
    },
    logoBadge: {
        width: '100%',
        alignItems: 'center',
    },
    logoImage: {
        width: 220,
        height: 70,
        resizeMode: 'contain',
    },

    avatarWrapper: {
        alignItems: 'center',
        marginBottom: 10,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 2,
        borderColor: '#9aa3b1',
        resizeMode: 'cover',
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
