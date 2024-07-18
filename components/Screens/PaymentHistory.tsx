import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, ScrollView, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/ui/header';
import { PaymentItem } from '../Card/PaymentHistoryCard';
import { SearchIcon } from '@/constants/Icon';

const PaymentHistory = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const payments = [
        {
            id: '1',
            name: 'Dr. Marcus Horizon',
            date: 'Yesterday',
            time: '12:36 PM',
            amount: '$56.00',
        },
        {
            id: '2',
            name: 'Dr. Marcus Horizon',
            date: 'Yesterday',
            time: '12:36 PM',
            amount: '$56.00',
        },
        {
            id: '3',
            name: 'Dr. Marcus Horizon',
            date: 'Yesterday',
            time: '12:36 PM',
            amount: '$56.00',
        },

    ];

    const filteredPayments = payments.filter(payment =>
        payment.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#EEEEEE',
        }} >
            <Header />

            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.title}>Payment History</Text>

                    <View style={styles.searchContainer}>
                        <SearchIcon />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search doctors..."
                            placeholderTextColor="#1C1C1C99"
                        />
                    </View>

                    <FlatList
                        data={filteredPayments}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <PaymentItem payment={item} />}
                        contentContainerStyle={styles.paymentList}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
    },
    content: {
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 20,
        color: '#101623',
        fontFamily: 'Montserrat_SemiBold',
        marginBottom: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7F8F9',
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 14,
        fontFamily: 'Montserrat_Reg',
        color: '#1C1C1C',
    },
    paymentList: {
        paddingBottom: 100,
    },
});

export default PaymentHistory;
