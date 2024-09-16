import {SafeAreaView, Text, StyleSheet, View} from "react-native";
import InputLabel from "@/components/Input/InputLabel";
import PrimaryButton from "@/components/Button/PrimaryButton";
import {useLayoutEffect} from "react";
import {useNavigation, useRouter} from "expo-router";

export default function LogIn() {
const navigation = useNavigation();
const router = useRouter();
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Log in to Mosic',
            headerShown: true,
            headerTransparent: true,
            headerLeft: () => <View/>
        })
    }, []);
    const handleNavigationToHome =() => {
        // @ts-ignore
        router.push('/(tabs)/')
    }
    return (
       <SafeAreaView style={styles.container}>
           <View style={styles.content}>
           <InputLabel label={'Email or Username'} placeholder={'Email or Username'} value={''} onChangeText={() => {}}/>
           <InputLabel secureTextEntry={true} label={'Password'} placeholder={'Password'} value={''} onChangeText={() => {}}/>
               <View style={styles.cta}>
                   <PrimaryButton onPress={handleNavigationToHome} label={'Next'}/>
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

