import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import TopNavigationBar from "@/components/Home/TopNavigationBar";
import HeroCarousel from "@/components/Home/HeroCarousel";
import OptionSections from "@/components/Home/OptionSections";
import PlaylistCarousel from "@/components/Home/PlaylistCarousel";
import { useRouter } from "expo-router";

export default function Tab() {
  const router = useRouter();
  const handleNavigationToAudioRecognizer = () => {
    router.push("/audioRecognizer/AudioRecognizer");
  };
  const handleOnSearchPress = () => {
    router.push("/search/Search");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TopNavigationBar
          handleOnSearchPress={handleOnSearchPress}
          handleNavigationToAudioRecognizer={handleNavigationToAudioRecognizer}
        />
        <HeroCarousel />
        <OptionSections />
        <PlaylistCarousel />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
