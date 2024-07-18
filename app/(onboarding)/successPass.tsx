import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ResetSuccessScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                MadLink <Text style={styles.textGreen}>Pro</Text>
            </Text>
            <Image source={require('../../assets/images/success.png')} style={styles.image} />
            <Text style={styles.message}>You have successfully reset your password.</Text>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Log In</Text>
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
    image: {
        width: 130,
        height: 130,
        marginBottom: 20,
    },
    message: {
        fontSize: 16,
        fontFamily: 'Montserrat_Reg',
        color: '#1C1C1C',
        textAlign: 'center',
        marginBottom: 30,
        paddingHorizontal: 20,
    },
    loginButton: {
        backgroundColor: '#000',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        width: '90%',
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Montserrat_Medium',
    },
});

export default ResetSuccessScreen;
