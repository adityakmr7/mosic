import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View, GestureResponderEvent, ViewStyle} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {IconProps} from "@expo/vector-icons/build/createIconSet";

interface IconButtonProps{
    iconName:string // Type for icon name
    iconSize: number;
    iconColor: string;
    label: string;
    onPress?: (event: GestureResponderEvent) => void;
    Icon: React.ComponentType<IconProps<any>>; // Dynamic Icon component
    style?: {
        container: ViewStyle
    };
}

const IconButton: React.FC<IconButtonProps> = ({ Icon,iconName, iconSize, iconColor, label, onPress,style={} }) => {
    return (
        <TouchableOpacity style={[styles.button,style.container]} onPress={onPress}>
            <View style={[styles.iconContainer]}>
                <Icon name={iconName} size={iconSize} color={iconColor} />
                <Text style={styles.label}>{label}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000', // You can adjust the background color
        width:'100%',
        marginBottom:16,
        justifyContent:'center'
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        marginLeft: 8,
        fontSize: 16,
        color: '#FFF', // White color for the label text
    },
});

export default IconButton;
