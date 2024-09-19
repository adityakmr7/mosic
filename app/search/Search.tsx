import { SafeAreaView, ScrollView, View } from "react-native";
import TopNavigationBar from "@/components/Home/TopNavigationBar";
import HeroCarousel from "@/components/Home/HeroCarousel";
import OptionSections from "@/components/Home/OptionSections";
import PlaylistCarousel from "@/components/Home/PlaylistCarousel";

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TopNavigationBar
          variant={"search"}
          handleOnSearchPress={handleOnSearchPress}
          handleNavigationToAudioRecognizer={handleNavigationToAudioRecognizer}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
