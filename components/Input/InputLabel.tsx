import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface InputFieldProps {
    label: string;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean; // Optional prop to make the input secure (for passwords)
}

const InputField: React.FC<InputFieldProps> = ({
                                                   label,
                                                   placeholder,
                                                   value,
                                                   onChangeText,
                                                   secureTextEntry = false,
                                               }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                placeholderTextColor="#9ca3af" // Light gray placeholder
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#000', // Black text for the label
    },
    input: {
        borderWidth: 1,
        borderColor: '#e5e7eb', // Light gray border
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 12,
        fontSize: 16,
        color: '#000', // Black text inside the input
        backgroundColor: '#fff', // White background for the input field
    },
});

export default InputField;
