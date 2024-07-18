import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import Splash from '@/components/SplashScreen';
import { router } from 'expo-router';

const OnboardingScreen: React.FC = () => {
    const [showSplash, setShowSplash] = useState(true);
    const navigation = useNavigation();
    const swiperRef = useRef<any>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (showSplash) {
        return <Splash />;
    }

    const screens = [
        {
            image: require('../../assets/images/onboarding1.png'),
            subtitle: 'Consult only with a',
            highlight: 'doctor you trust',
            page: 1,
        },
        {
            image: require('../../assets/images/onboarding2.png'),
            subtitle: 'Find a lot of specialist',
            highlight: 'doctors in one place',
            page: 2,
        },
        {
            image: require('../../assets/images/onboarding3.png'),
            subtitle: 'Get connect our',
            highlight: 'Medico Network',
            page: 3,
        },
        {
            image: require('../../assets/images/onboarding4.png'),
            subtitle: 'Also connect with our',
            highlight: 'Best Pharmacy',
            page: 4,
        },
    ];

    const handleNext = (index: number) => {
        if (index < screens.length - 1) {
            swiperRef.current.scrollBy(1);
        } else {
            router.push('final');
        }
    };

    return (
        <Swiper ref={swiperRef} loop={false} showsPagination={false} style={styles.wrapper}>
            {screens.map((screen, index) => (
                <View key={index} style={styles.container}>
                    <Text style={styles.text}>
                        MadLink <Text style={styles.textGreen}>Pro</Text>
                    </Text>
                    <Image source={screen.image} style={styles.image} />
                    <Text style={styles.subtitle}>
                        {screen.subtitle} <Text style={styles.highlight}>{screen.highlight}</Text>
                    </Text>
                    <View style={styles.footer}>
                        <Text style={styles.pageIndicator}>{screen.page}</Text>
                        <View style={styles.divider}></View>
                        <Text style={styles.totalPages}>4</Text>
                    </View>
                    <View style={styles.navigation}>
                        <TouchableOpacity onPress={() => handleNext(index)}>
                            <Image source={require('../../assets/images/rightarrow.png')} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => router.push('final')}>
                            <Text style={styles.buttonText}>Skip</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </Swiper>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: {},
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    icon: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    text: {
        fontSize: 28,
        fontFamily: 'Montserrat_Bold',
        color: '#002d5c',
    },
    textGreen: {
        color: '#387E82',
    },
    image: {
        width: width * 0.8,
        height: width * 0.8,
        resizeMode: 'contain',
        marginBottom: 30,
    },
    subtitle: {
        fontSize: 24,
        fontFamily: 'Montserrat_Reg',
        color: '#000',
        textAlign: 'center',
        marginVertical: 10,
    },
    highlight: {
        color: '#387E82',
        fontWeight: 'bold',
        fontFamily: 'Montserrat_Bold',
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30,
    },
    pageIndicator: {
        fontSize: 18,
        color: '#387E82',
        fontFamily: 'Montserrat_Reg',
    },
    totalPages: {
        fontSize: 18,
        color: '#B3BEC1',
        fontFamily: 'Montserrat_Reg',
    },
    divider: {
        width: 20,
        height: 2,
        backgroundColor: '#387E82',
        marginHorizontal: 5,
    },
    navigation: {
        position: 'absolute',
        bottom: 30,
        alignItems: 'center',
    },
    button: {
        marginTop: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: '#1C1C1C99',
        fontSize: 18,
        fontFamily: 'Montserrat_Reg',
    },
    nextButton: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#002d5c',
        borderRadius: 10,
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Montserrat_Bold',
    },
});

export default OnboardingScreen;
