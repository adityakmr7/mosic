import {SafeAreaView, Text, StyleSheet, View} from "react-native";
import InputLabel from "@/components/Input/InputLabel";
import PrimaryButton from "@/components/Button/PrimaryButton";
import React, {useLayoutEffect} from "react";
import {useNavigation} from "expo-router";

export default function SignUp() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Sign up for Mosic',
            headerShown: true,
            headerTransparent: true,
            headerLeft: () => <View/>
        })
    }, []);
    // TODO: add CHECK BOX
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <InputLabel label={'Username'} placeholder={'Username'} value={''} onChangeText={() => {}}/>
                <InputLabel  label={'Email'} placeholder={'Email'} value={''} onChangeText={() => {}}/>
                <InputLabel secureTextEntry={true} label={'Password'} placeholder={'Password'} value={''} onChangeText={() => {}}/>
                <View>
                    <Text>By creating an account you agree to the <Text>Terms of Service </Text>and <Text>Privacy Policy</Text> </Text>
                </View>
                <View style={styles.cta}>
                    <PrimaryButton label={'Create account'}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    content: {
        paddingHorizontal:16,
        paddingTop:32
    },
    cta: {
        paddingTop:32
    }

})

