import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import TopNavigationBar from "@/components/Home/TopNavigationBar";

export default function Tab() {
    return (
        <SafeAreaView style={styles.container}>
            <TopNavigationBar/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
