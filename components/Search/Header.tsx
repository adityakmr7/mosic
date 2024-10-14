import { View, StyleSheet, Text } from "react-native";
import Artist from "@/assets/images/musician.svg";
import Zone from "@/assets/images/zone.svg";
import Microphone from "@/assets/images/microphone.svg";
import Genre from "@/assets/images/genre.svg";
const Column = ({ label = "", Icon }: { label: string; Icon?: any }) => {
  return (
    <View style={styles.col}>
      <Icon />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default function Header() {
  return (
    <View style={styles.container}>
      <Column Icon={() => <Artist />} label={"Artists"} />
      <Column Icon={() => <Zone />} label={"Songs"} />
      <Column Icon={() => <Genre />} label={"Genres"} />
      <Column Icon={() => <Microphone />} label={"Recognition"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  // column
  col: {
    flexDirection: "column",
    alignItems: "center",
  },
  label: {
    paddingTop: 8,
  },
});
