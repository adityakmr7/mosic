import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
    Easing,
} from 'react-native-reanimated';

const AudioRecognitionUI = () => {
    const scale = useSharedValue(1);

    useEffect(() => {
        scale.value = withRepeat(
            withTiming(1.2, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
            -1,
            true
        );
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.outerCircle, animatedStyle]}>
                <View style={styles.middleCircle}>
                    <View style={styles.innerCircle}>
                        <Text style={styles.waveformIcon}>|||||||</Text>
                    </View>
                </View>
            </Animated.View>
            <Text style={styles.identifyingText}>Identifying 3s</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Stop Recognition</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0ff',
    },
    outerCircle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleCircle: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    waveformIcon: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    identifyingText: {
        marginTop: 20,
        fontSize: 18,
        color: '#333',
    },
    button: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
    },
    buttonText: {
        color: 'blue',
        fontSize: 16,
    },
});

export default AudioRecognitionUI;
