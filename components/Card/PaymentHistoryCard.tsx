import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

export const PaymentItem = ({ payment }: { payment: any }) => {
    return (
        <View style={styles.paymentItem}>
            <View style={styles.paymentDetails}>
                <Image
                    source={require('@/assets/images/avatar.png')}
                    style={styles.doctorImage}
                />
                <View style={styles.paymentText}>
                    <Text style={styles.doctorName}>{payment.name}</Text>
                    <Text style={styles.paymentInfo}>{payment.date} {payment.time}</Text>
                </View>
            </View>
            <View style={styles.paymentAmountContainer}>
                <Text style={styles.paymentAmount}>{payment.amount}</Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                }}>
                    <Text style={styles.paymentInfo}>From</Text>
                    <Image source={require('@/assets/images/account.png')} width={1000} height={1000} style={{
                        width: 14,
                        height: 14,
                        borderRadius: 10,
                    }} />
                </View>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
    },
    content: {
        paddingHorizontal: 20,
        paddingTop: 80,
    },
    title: {
        fontSize: 24,
        color: '#1C1C1C',
        fontFamily: 'Montserrat_SemiBold',
        marginBottom: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#A0A0A0',
        fontFamily: 'Montserrat_Regular',
    },
    paymentList: {
        paddingBottom: 100,
    },
    paymentItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 15,
        paddingVertical: 12,
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 1,
    },
    paymentDetails: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    doctorImage: {
        width: 50,
        height: 50,
        borderRadius: 20,
        marginRight: 10,
    },
    paymentText: {
        justifyContent: 'center',
    },
    doctorName: {
        fontSize: 14,
        color: '#1C1C1C',
        fontFamily: 'Montserrat_SemiBold',
    },
    paymentInfo: {
        fontSize: 10,
        color: '#8D8D8D',
        fontFamily: 'Montserrat_Reg',
        marginTop: 2,
    },
    paymentAmountContainer: {
        alignItems: 'flex-end',
    },
    paymentAmount: {
        fontSize: 18,
        color: '#1C1C1C',
        fontFamily: 'Montserrat_SemiBold',
        marginBottom: 2,
    },
});