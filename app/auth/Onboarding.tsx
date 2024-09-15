import {View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity} from "react-native";
import React from "react";
import IconButton from "@/components/Button/IconButton";
import {AntDesign} from "@expo/vector-icons";
import PrimaryButton from "@/components/Button/PrimaryButton";
const Onboarding = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.img} src={require('@/assets/images/Mosic.png')}/>
            <IconButton Icon={AntDesign} iconName={"google"} iconSize={26} iconColor={'white'} label={'Google'}/>
            <IconButton Icon={AntDesign} iconName={"google"} iconSize={26} iconColor={'white'} label={'Google'}/>
            <IconButton Icon={AntDesign} iconName={"google"} iconSize={26} iconColor={'white'} label={'Google'}/>
            <View style={styles.bottomCTA}>
                <PrimaryButton onPress={() => {}} label={'Log in'}/>
            </View>

            <View style={styles.noAccount}>
                <Text style={styles.noText}>No account?</Text>
                <TouchableOpacity>
                    <Text style={styles.createText}>Create one</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
        paddingHorizontal:16
    },
    img: {
        width:400,
        height:400,
    },
    bottomCTA: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:16
    },
    noAccount: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:16
    },
    noText: {
        color:'#9F9F9F'

    },
    createText: {
        color:'white',
        marginLeft:4
    }

})

export default Onboarding;
