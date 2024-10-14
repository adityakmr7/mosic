import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import TopNavigationBar from "@/components/Home/TopNavigationBar";
import React from "react";

import { Header } from "@/components/Search";
import PillButton from "@/components/Button/PillButton";
import { Text } from '@/components/Theme';



const SearchRecommendation = ({ title, pillButtons }: { title: string, pillButtons: string[] }) => {
  return (
    <View style={styles.historyContainer}>
      <View>
        <Text variant="body16" style={styles.rowTitle}>{title}</Text>

        <View style={styles.row}>
          {pillButtons.map((pill: string, index: number) => (
            <PillButton key={index} label={pill} />
          ))}
        </View>
      </View>
    </View>
  );
};

const RecommendationCard = ({ title, listOfSongs }: { title: string, listOfSongs: string[] }) => {
  return (
    <View style={styles.rCardContainer}>
      <View style={styles.rTitleContainer}>
        <Text variant="body16">{title}</Text>
        <View />
      </View>
      {listOfSongs.map((song: string, index: number) => (
        <View key={index} style={[styles.row, styles.rRow]}>
          <Text variant="body16">{index + 1}</Text>
          <Text variant="body16" style={styles.songName}>{song}</Text>
        </View>
      ))}
    </View>
  )
}



const Search = () => {
  const handleOnSearchPress = () => { };
  const handleNavigationToAudioRecognizer = () => { };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TopNavigationBar
          variant={"search"}
          handleOnSearchPress={handleOnSearchPress}
          handleNavigationToAudioRecognizer={handleNavigationToAudioRecognizer}
        />
        <Header />
        <SearchRecommendation title="Search History" pillButtons={['Recommendation', 'Official']} />
        <SearchRecommendation title="More to Explore" pillButtons={['Bella Bravo', 'Quincy Quaver', 'Willow', 'Christmas']} />
        <ScrollView
          contentContainerStyle={
            styles.scrollContent
          }
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
          <RecommendationCard
            title="Hits"
            listOfSongs={[
              'Fragments of Time',
              'Whispers in the Wind',
              'Against the current',
              'Beneath the Stars'
            ]}

          />
          <RecommendationCard
            title="Hits"
            listOfSongs={[
              'Fragments of Time',
              'Whispers in the Wind',
              'Against the current',
              'Beneath the Stars'
            ]}

          />

        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },

  // Search history
  historyContainer: {
    paddingHorizontal: 16,
    paddingTop: 8
  },

  rowTitle: {
    paddingVertical: 8
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  // Recommendation Card
  rCardContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    elevation: 4,
    borderRadius: 8,
    borderColor: '#ffffff',
    marginLeft: 16,
    marginTop: 20,

    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },

    shadowOpacity: 0.2,
    shadowRadius: 5,

  },
  rTitleContainer: {
    paddingVertical: 16
  },
  rRow: {
    paddingVertical: 16
  },
  songName: {
    paddingLeft: 16
  },
  scrollContent: {
    flex: 1,
    paddingBottom: 100
  }
});

export default Search;
