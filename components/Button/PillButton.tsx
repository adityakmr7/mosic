import { View, StyleSheet, Text } from 'react-native';
const PillButton = ({ label }: { label: string }) => {
    return (
        <View style={styles.container}>
            <Text>{label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderColor: '#DDDDDD',
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8
    }
})

export default PillButton;