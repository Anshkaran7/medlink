import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FinalScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                MadLink <Text style={styles.textGreen}>Pro</Text>
            </Text>
            <Text style={styles.subtitle}>Let's get started!</Text>
            <Text style={styles.description}>Login to enjoy the features we've provided, and stay healthy!</Text>
            <TouchableOpacity style={styles.loginButton}
                onPress={() => router.push('login')}
            >
                <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={
                () => router.push('register')
            }>
                <Text style={styles.signupText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: '100%',
        paddingHorizontal: 20,
        position: 'relative',
    },
    title: {
        fontSize: 28,
        fontFamily: 'Montserrat_Bold',
        color: '#002d5c',
        marginBottom: 10,
    },
    text: {
        fontSize: 34,
        position: 'absolute',
        top: 200,
        fontFamily: 'Montserrat_Bold',
        color: '#002d5c',
    },
    textGreen: {
        color: '#387E82',
    },
    subtitle: {
        fontSize: 24,
        fontFamily: 'Montserrat_SemiBold',
        color: '#000',
        marginTop: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        fontFamily: 'Montserrat_Reg',
        color: '#1C1C1C66',
        marginHorizontal: 20,
        textAlign: 'center',
        marginBottom: 40,
    },
    loginButton: {
        backgroundColor: '#000',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 100,
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',

    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Montserrat_Medium',
    },
    signupText: {
        color: '#387E82',
        fontSize: 16,
        fontFamily: 'Montserrat_Medium',
    },
});

export default FinalScreen;
