import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ForgotPasswordScreen: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isEmail, setIsEmail] = useState(true); // toggle between Email and Number

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                MadLink <Text style={styles.textGreen}>Pro</Text>
            </Text>
            <Text style={styles.subtitle}>Forgot Your Password ?</Text>
            <Text style={styles.description}>Enter your email or your phone number, we will send you confirmation code</Text>
            <View style={styles.toggleContainer}>
                <TouchableOpacity
                    style={[styles.toggleButton, isEmail && styles.activeToggle]}
                    onPress={() => setIsEmail(true)}
                >
                    <Text style={[styles.toggleText, isEmail && styles.activeToggleText]}>Email Id</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.toggleButton, !isEmail && styles.activeToggle]}
                    onPress={() => setIsEmail(false)}
                >
                    <Text style={[styles.toggleText, !isEmail && styles.activeToggleText]}>Number</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email Id / Number"
                    placeholderTextColor="#1C1C1C66"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <TouchableOpacity style={styles.resetButton}
                onPress={
                    () => router.push('code')
                }
            >
                <Text style={styles.resetButtonText}>Reset Password</Text>
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
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 34,
        fontFamily: 'Montserrat_Bold',
        color: '#002d5c',
        marginBottom: 70,
    },
    textGreen: {
        color: '#387E82',
    },
    subtitle: {
        fontSize: 18,
        fontFamily: 'Montserrat_Bold',
        color: '#1C1C1C',
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        fontFamily: 'Montserrat_Reg',
        color: '#1C1C1C',
        textAlign: 'center',
        marginBottom: 30,
    },
    toggleContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#1C1C1C66',
        borderRadius: 30,
        padding: 3
    },
    toggleButton: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 30,
    },
    activeToggle: {
        backgroundColor: '#1C1C1C',
    },
    toggleText: {
        fontSize: 14,
        fontFamily: 'Montserrat_Reg',
        color: '#1C1C1C',
    },
    activeToggleText: {
        color: '#fff',
    },
    inputContainer: {
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#1C1C1C66',
        paddingHorizontal: 20,
        marginBottom: 20,
        width: '100%',
    },
    input: {
        height: 50,
        fontSize: 14,
        fontFamily: 'Montserrat_Reg',
        color: '#1C1C1C66',
    },
    resetButton: {
        backgroundColor: '#000',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        width: '100%',
        alignItems: 'center',
    },
    resetButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Montserrat_Medium',
    },
});

export default ForgotPasswordScreen;
