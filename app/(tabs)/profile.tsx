import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Modal, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/ui/header';
import { AppointmentIcon, CaloriesIcon, FaqIcon, HeartBeatIcon, LogoutIcon, PaymentHistoryIcon, SavedIcon, WeightIcon } from '@/constants/Icon';
import { LogoutModal } from '@/components/Modal/LogoutModal';
import PaymentHistory from '@/components/Screens/PaymentHistory';
import { router } from 'expo-router';

const MainScreen = () => {
    const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);

    const openLogoutModal = () => {
        setLogoutModalVisible(true);
    };

    const closeLogoutModal = () => {
        setLogoutModalVisible(false);
    };

    const [paymentHistory, setPaymentHistory] = useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView
                contentContainerStyle={{ paddingBottom: 100, paddingTop: 80 }}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.userInfo}>
                    <Image
                        source={require('@/assets/images/avatar.png')}
                        style={styles.userImage}
                        height={1000}
                        width={1000}
                    />
                    <Text style={styles.userName}>Rev David</Text>
                </View>

                <View style={styles.statsRow}>
                    <View style={styles.statItem}>
                        <HeartBeatIcon />
                        <Text style={styles.statLabel}>Heart rate</Text>
                        <Text style={styles.statValue}>215bpm</Text>
                    </View>
                    <View style={styles.statItem}>
                        <CaloriesIcon />
                        <Text style={styles.statLabel}>Calories</Text>
                        <Text style={styles.statValue}>756cal</Text>
                    </View>
                    <View style={styles.statItem}>
                        <WeightIcon />
                        <Text style={styles.statLabel}>Weight</Text>
                        <Text style={styles.statValue}>103lbs</Text>
                    </View>
                </View>

                <View style={styles.menu}>
                    <TouchableOpacity style={styles.menuItem}>
                        <SavedIcon />
                        <Text style={styles.menuLabel}>My Saved</Text>
                        <Ionicons name="chevron-forward" size={24} color="#555555" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <AppointmentIcon />
                        <Text style={styles.menuLabel}>Appointment</Text>
                        <Ionicons name="chevron-forward" size={24} color="#555555" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={
                        () => router.push('screens/paymentHistory')
                    }>
                        <PaymentHistoryIcon />
                        <Text style={styles.menuLabel}>Payment History</Text>
                        <Ionicons name="chevron-forward" size={24} color="#555555" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <FaqIcon />
                        <Text style={styles.menuLabel}>FAQs</Text>
                        <Ionicons name="chevron-forward" size={24} color="#555555" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={openLogoutModal}>
                        <LogoutIcon />
                        <Text style={[styles.menuLabel, { color: '#FF5C5C' }]}>Logout</Text>
                        <Ionicons name="chevron-forward" size={24} color="#555555" />
                    </TouchableOpacity>
                </View>
            </ScrollView>


            {/* Logout Modal */}
            <LogoutModal
                isVisible={isLogoutModalVisible}
                onClose={closeLogoutModal}
            />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
    },
    userInfo: {
        alignItems: 'center',
        marginTop: -40,
    },
    userImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        aspectRatio: 1,
        objectFit: 'cover',
    },
    userName: {
        fontSize: 18,
        color: '#387E82',
        marginTop: 10,
        fontFamily: 'Montserrat_SemiBold',
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        marginVertical: 20,
    },
    statItem: {
        alignItems: 'center',
    },
    statLabel: {
        color: '#387E82',
        marginTop: 5,
        fontSize: 10,
        fontFamily: 'Montserrat_Medium',
    },
    statValue: {
        color: '#1C1C1C',
        fontSize: 16,
        fontFamily: 'Montserrat_Medium',
        marginTop: 2,
    },
    menu: {
        backgroundColor: '#fff',
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        width: '100%',
        paddingHorizontal: 20,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: '#E8F3F1',
    },
    menuLabel: {
        fontSize: 14,
        color: '#387E82',
        marginLeft: 10,
        flex: 1,
        fontFamily: 'Montserrat_Medium',
    },
});



export default MainScreen;
