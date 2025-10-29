import RecentMatchesSlider from "@/components/RecentMatchesSlider";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Leaderboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RecentMatchesSlider />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0E13",
  },
});

export default Leaderboard;
