import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons"; // Icons from Expo's icon library

interface TopNavigationBarProps {
  handleNavigationToAudioRecognizer: () => void;
  handleOnSearchPress: () => void;
  variant?: "search" | "landing";
}

const TopNavigationBar = ({
  handleNavigationToAudioRecognizer,
  handleOnSearchPress,
  variant = "landing",
}: TopNavigationBarProps) => {
  return (
    <View style={styles.container}>
      {/* Menu Icon */}
      <TouchableOpacity
        onPress={handleOnSearchPress}
        style={styles.iconContainer}
      >
        <Feather name="menu" size={24} color="black" />
      </TouchableOpacity>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Feather
          name="search"
          size={20}
          color="gray"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Music"
          placeholderTextColor="gray"
          onPressIn={handleOnSearchPress}
        />
      </View>

      {variant === "landing" && (
        <TouchableOpacity
          onPress={handleNavigationToAudioRecognizer}
          style={styles.iconContainer}
        >
          <Ionicons name="mic-outline" size={24} color="black" />
        </TouchableOpacity>
      )}
      {variant === "search" && (
        <TouchableOpacity>
          <Text>Search</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#f9f9f9",
  },
  iconContainer: {
    padding: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 25,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },
});

export default TopNavigationBar;
