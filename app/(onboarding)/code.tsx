import { router } from 'expo-router';
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const VerificationCodeScreen: React.FC = () => {
    const [code, setCode] = useState(['', '', '', '']);
    const inputRefs = useRef<(TextInput | null)[]>([]);

    const handleChange = (text: string, index: number) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);

        if (text && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyPress = ({ nativeEvent }: { nativeEvent: any }, index: number) => {
        if (nativeEvent.key === 'Backspace') {
            const newCode = [...code];
            if (newCode[index] === '' && index > 0) {
                newCode[index - 1] = '';
                inputRefs.current[index - 1]?.focus();
            } else {
                newCode[index] = '';
            }
            setCode(newCode);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                MadLink <Text style={styles.textGreen}>Pro</Text>
            </Text>
            <Text style={styles.subtitle}>Enter Verification Code</Text>
            <Text style={styles.description}>Enter code that we have sent to your number 0852681***</Text>
            <View style={styles.codeContainer}>
                {code.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.codeInput}
                        maxLength={1}
                        keyboardType="numeric"
                        value={digit}
                        onChangeText={(text) => handleChange(text, index)}
                        onKeyPress={(e) => handleKeyPress(e, index)}
                        ref={(ref) => (inputRefs.current[index] = ref)}
                    />
                ))}
            </View>
            <TouchableOpacity style={styles.verifyButton}
                onPress={() => router.push('newpass')}
            >
                <Text style={styles.verifyButtonText}>Verify</Text>
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
        width: '80%',
        marginBottom: 30,
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginBottom: 30,
    },
    codeInput: {
        width: 60,
        height: 60,
        borderRadius: 16,
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Montserrat_Bold',
        color: '#1C1C1C',
        borderWidth: 1,
        borderColor: '#1C1C1C66',
    },
    verifyButton: {
        backgroundColor: '#000',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        alignItems: 'center',
        width: '90%',
    },
    verifyButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Montserrat_Medium',
    },
});

export default VerificationCodeScreen;
