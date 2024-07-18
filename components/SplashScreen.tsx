// src/components/Splash.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Splash: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const [textWidth, setTextWidth] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    clearInterval(interval);
                    return 100;
                }
                return Math.min(oldProgress + 10, 100);
            });
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            <Text
                onLayout={(event) => {
                    const { width } = event.nativeEvent.layout;
                    setTextWidth(width);
                }}
                style={styles.text}
            >
                MedLink <Text style={styles.textGreen}>Pro+</Text>
            </Text>
            <View style={[styles.progressBar, { width: textWidth }]}>
                <View style={[styles.progress, { width: `${progress}%` }]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 34,
        fontFamily: 'Montserrat_Bold', // Use your custom font
        color: '#002d5c', // dark blue
    },
    textGreen: {
        color: '#00b300', // primary green
    },
    progressBar: {
        height: 5,
        backgroundColor: '#B3BEC1',
        marginTop: 20,
        borderRadius: 10,
    },
    progress: {
        height: '100%',
        backgroundColor: '#002d5c',
        borderRadius: 10,
    },
});

export default Splash;
