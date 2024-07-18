import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Link, router } from 'expo-router';

const LoginScreen: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                MadLink <Text style={styles.textGreen}>Pro</Text>
            </Text>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                marginTop: 80,
                width: '100%',
            }}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email Id / Number"
                        placeholderTextColor="#1C1C1C66"
                        value={email}
                        onChangeText={setEmail}
                    />
                    {email ? (
                        <Ionicons name="checkmark-circle" size={20} color="#387E82" style={styles.icon} />
                    ) : (
                        <Ionicons name="close-circle" size={20} color="#B3BEC1" style={styles.icon} />
                    )}
                </View>
                <View style={styles.inputContainer1}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#1C1C1C66"
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={20} color="#B3BEC1" style={styles.icon} />
                    </TouchableOpacity>

                </View>
                <Link href="forgot-password" style={{ alignSelf: 'flex-end', marginTop: 5, fontFamily: 'Montserrat_Medium', fontSize: 12, textDecorationLine: 'underline' }}>
                    Forgot Password?
                </Link>
                <TouchableOpacity style={styles.loginButton}
                    onPress={
                        () => router.push('(tabs)')
                    }
                >
                    <Text style={styles.loginButtonText}>Log In</Text>
                </TouchableOpacity>
                <Text style={styles.signupText}>
                    Don't have an account ? <Link href="register" style={styles.signupLink}>Sign Up</Link>
                </Text>
            </View>
            <View style={styles.socialIconsContainer}>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/apple.png')} style={styles.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/google.png')} style={styles.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/fascebook.png')} style={styles.socialIcon} />
                </TouchableOpacity>
            </View>
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
    },
    textGreen: {
        color: '#387E82',
    },
    title: {
        fontSize: 28,
        fontFamily: 'Montserrat_Bold',
        color: '#002d5c',
        marginBottom: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#1C1C1C66',
        paddingHorizontal: 20,
        marginBottom: 20,
        width: '100%',
    },
    inputContainer1: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#1C1C1C66',
        paddingHorizontal: 20,
        width: '100%',
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 14,
        fontFamily: 'Montserrat_Reg',
        color: '#1C1C1C66',
    },
    icon: {
        marginLeft: 10,
    },
    loginButton: {
        backgroundColor: '#000',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        marginBottom: 20,
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Montserrat_Medium',
    },
    signupText: {
        fontSize: 14,
        fontFamily: 'Montserrat_Reg',
        color: '#1C1C1C',
        marginBottom: 30,
    },
    signupLink: {
        color: '#387E82',
        fontFamily: 'Montserrat_Bold',
    },
    socialIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
    },
    socialIcon: {
        width: 60,
        height: 60,
        marginHorizontal: 10,
    },
});

export default LoginScreen;
