import { Images } from "@/assets/images/Images";
import Header from "@/components/Header";
import { Image, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Header />
      <Image
        source={{ uri: Images.king }}
        style={styles.king}
        resizeMode="contain"
      />
      <Text style={styles.heading}>Play It</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#0B0E13",
    alignItems: "center",
  },
  king: {
    position: "absolute",
    right: -60,
    top: 75,
    width: 400,
    height: 400,
    opacity: 0.75,
  },
  heading: {
    color: "white",
    fontSize: 70,
    textAlign: "left",
    width: "85%",
    marginTop: 30,
  },
});

export default Dashboard;
