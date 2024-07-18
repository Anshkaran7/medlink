import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/header.png')} style={styles.background} height={1000} width={1000} />
            <View style={styles.headerContent}>
                <Text style={styles.text}>
                    MadLink <Text style={styles.textGreen}>Pro</Text>
                </Text>
                <View style={styles.icons}>
                    <Image source={require('@/assets/images/notification.png')} style={styles.bell} height={1000} width={1000} />
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        paddingHorizontal: 10,
                        gap: 10,
                        paddingVertical: 5,
                        borderRadius: 50,
                        justifyContent: 'space-between',
                        width: 100,
                        paddingLeft: 20,
                    }}
                    >
                        <Text style={{ fontFamily: 'Montserrat_SemiBold', fontSize: 14 }}
                        >Rev</Text>
                        <Image source={require('@/assets/images/avatar.png')} style={styles.avatar} height={1000} width={1000} />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        zIndex: 100,
    },
    bell: {
        width: 32,
        height: 32,
        marginHorizontal: 10,
    },
    background: {
        top: -50,
        position: 'absolute',
        width: '100%',
        height: 125,
    },
    text: {
        fontSize: 24,
        fontFamily: 'Montserrat_Bold',
        color: '#002d5c',
    },
    textGreen: {
        color: '#387E82',
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 15,
    },
    logo: {
        width: 100,
        height: 30,
    },
    icons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 20,
    },
});

export default Header;
