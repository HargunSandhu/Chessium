import { Images } from "@/assets/images/Images";
import Header from "@/components/Header";
import { Inter_500Medium, useFonts } from "@expo-google-fonts/inter";
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Dashboard = () => {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
  });

  if (!fontsLoaded) return null;
  return (
    <SafeAreaView style={styles.main}>
      <Header />
      <Image
        source={{ uri: Images.king }}
        style={styles.king}
        resizeMode="contain"
      />
      <Text style={styles.heading}>Play It</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          width: "90%",
          gap: 10,
        }}
      >
        <TouchableOpacity>
          <View style={styles.competitiveContainer}>
            <Image source={{ uri: Images.rook }} style={styles.rook} />
            <Text style={styles.competitiveText}>
              Competitive {"\n"}Player vs Player
            </Text>
            <Ionicons
              name="arrow-forward"
              size={35}
              color="#3B82F6"
              style={styles.forwardIconCompetitive}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            justifyContent: "center",
            gap: 5,
          }}
        >
          <View style={styles.machineContainer}></View>
          <View style={styles.challangeFriendContainer}></View>
        </View>
      </View>
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
  competitiveContainer: {
    backgroundColor: "#141821",
    borderWidth: 1,
    borderRadius: 18,
    borderColor: "#3B82F6",
    width: 190,
    height: 240,
    marginTop: 20,
    justifyContent: "center",
  },
  competitiveText: {
    color: "white",
    fontSize: 20,
    padding: 25,
    fontFamily: "Inter_500Medium",
  },
  rook: {
    width: 50,
    height: 120,
    top: -40,
    marginLeft: 25,
    position: "absolute",
  },
  forwardIconCompetitive: { position: "absolute", right: 25, bottom: 25 },
  machineContainer: {
    width: 167,
    height: 100,
    backgroundColor: "#141821",
    marginTop: 20,
  },
  challangeFriendContainer: {
    width: 170,
    height: 100,
    backgroundColor: "#141821",
    marginTop: 20,
  },
});

export default Dashboard;
