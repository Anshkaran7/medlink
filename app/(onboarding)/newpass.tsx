import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const CreateNewPasswordScreen: React.FC = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                MadLink <Text style={styles.textGreen}>Pro</Text>
            </Text>
            <Text style={styles.subtitle}>Create New Password</Text>
            <Text style={styles.description}>Create your new password to login</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Write New Password"
                    placeholderTextColor="#1C1C1C66"
                    secureTextEntry
                    value={newPassword}
                    onChangeText={setNewPassword}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    placeholderTextColor="#1C1C1C66"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
            </View>
            <TouchableOpacity style={styles.createButton}
                onPress={() => router.push("successPass")}>
                <Text style={styles.createButtonText}>Create Password</Text>
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
        marginBottom: 30,
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
    createButton: {
        backgroundColor: '#000',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        alignItems: 'center',
        width: '100%',
    },
    createButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Montserrat_Medium',
    },
});

export default CreateNewPasswordScreen;
