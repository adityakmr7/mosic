import {View,StyleSheet} from "react-native";
import AudioRecognitionUI from "@/components/AudioRecognitionUI";

const AudioRecognizer = () => {
    return (
        <View style={styles.container}>
            <AudioRecognitionUI/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default AudioRecognizer;
