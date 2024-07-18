import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const LogoutModal = ({ isVisible, onClose }: { isVisible: boolean, onClose: () => void }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={modalStyles.modalOverlay}>
                <View style={modalStyles.modalContent}>
                    <Image
                        source={require('@/assets/images/logout.png')}
                        style={modalStyles.modalIcon}
                        height={1000}
                        width={1000}
                    />
                    <Text style={modalStyles.modalText}>Are you sure you want to log out of your account?</Text>
                    <TouchableOpacity style={modalStyles.modalButton} onPress={onClose}>
                        <Text style={modalStyles.modalButtonText}>Log Out</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={modalStyles.cancelButton} onPress={onClose}>
                        <Text style={modalStyles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};
const modalStyles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
    },
    modalIcon: {
        width: 80,
        height: 80,
        marginBottom: 20,
    },
    modalText: {
        fontSize: 16,
        color: '#1C1C1C',
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
        fontFamily: 'Montserrat_Medium',
    },
    modalButton: {
        backgroundColor: '#387E82',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 14,
        marginTop: 10,
        width: '70%',
        alignItems: 'center',
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Montserrat_Medium',
    },
    cancelButton: {
        borderColor: '#387E82',
        borderWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 14,
        marginTop: 10,
        width: '70%',
        alignItems: 'center',
    },
    cancelButtonText: {
        color: '#387E82',
        fontSize: 16,
        fontFamily: 'Montserrat_Medium',
    },
});