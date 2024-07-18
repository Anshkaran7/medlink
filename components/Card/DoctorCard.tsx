import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DoctorCard = ({ doctor }: { doctor: any }) => {
    return (
        <View style={styles.card}>
            <Image
                source={require('@/assets/images/avatar.png')}
                style={styles.doctorImage}
                height={1000}
                width={1000}
            />
            <View style={styles.doctorInfo}>
                <Text style={styles.doctorName}>{doctor.name}</Text>
                <Text style={styles.specialty}>{doctor.specialty}</Text>
                <View style={styles.ratingDistance}>
                    <View style={styles.ratingContainer}>
                        <Ionicons name="star" size={14} color="#387E82" />
                        <Text style={styles.rating}>{doctor.rating}</Text>
                    </View>
                    <View style={styles.distanceContainer}>
                        <Ionicons name="location" size={12} color="#1C1C1C66" />
                        <Text style={styles.distance}>{doctor.distance} away</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 20,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        width: 150, // Adjust width as per your design
    },
    doctorImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    doctorInfo: {
        alignItems: 'center',
        marginTop: 10,
    },
    doctorName: {
        fontSize: 12,
        color: '#1C1C1C',
        fontFamily: 'Montserrat_SemiBold',
        textAlign: 'center',
    },
    specialty: {
        fontSize: 10,
        color: '#555555',
        fontFamily: 'Montserrat_Reg',
        textAlign: 'center',
    },
    ratingDistance: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5,
    },
    rating: {
        fontSize: 12,
        color: '#387E82',
        marginLeft: 5,
        fontFamily: 'Montserrat_Medium',
    },
    distanceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    distance: {
        fontSize: 10,
        color: '#1C1C1C66',
        marginLeft: 5,
        fontFamily: 'Montserrat_Medium',
    },
});

export default DoctorCard;
