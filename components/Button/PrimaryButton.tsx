import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';

interface PrimaryButtonProps {
    label: string;
    onPress?: (event: GestureResponderEvent) => void;
    disabled?: boolean; // Optional prop to disable the button
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label, onPress, disabled = false }) => {
    return (
        <TouchableOpacity
            style={[styles.button, disabled && styles.disabledButton]} // Apply disabled styles when needed
            onPress={onPress}
            disabled={disabled} // Disable button press if disabled is true
        >
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3b82f6', // Blue color (adjust as necessary)
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        width:'100%'
    },
    disabledButton: {
        backgroundColor: '#9ca3af', // Gray color for disabled state
    },
    buttonText: {
        color: '#ffffff', // White text
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default PrimaryButton;
