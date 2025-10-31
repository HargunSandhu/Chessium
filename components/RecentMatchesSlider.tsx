import React, { useMemo, useRef } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Images } from "@/assets/images/Images";
import {
  Inter_400Regular,
  Inter_500Medium,
  useFonts,
} from "@expo-google-fonts/inter";

const RecentMatchesSlider = () => {
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["40%", "75%", "90%"], []);
  const [fontsLoaded] = useFonts({
    // Inter_700Bold,
    Inter_400Regular,
    Inter_500Medium,
  });

  const recentMatches = [
    {
      id: 1,
      timeControl: "Blitz",
      opponent: "Mariel Denver",
      opponentAvatar: "https://randomuser.me/api/portraits/women/45.jpg",
      result: "Win",
    },
    {
      id: 2,
      timeControl: "Bullet",
      opponent: "Manuel Hoff",
      opponentAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      result: "Loose",
    },
    {
      id: 3,
      timeControl: "Rapid",
      opponent: "Player3",
      opponentAvatar: "https://randomuser.me/api/portraits/women/46.jpg",
      result: "Win",
    },
    {
      id: 4,
      timeControl: "Bullet",
      opponent: "Manuel Hoff",
      opponentAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      result: "Loose",
    },
  ];

  const getIconForTimeControl = (timeControl: string) => {
    switch (timeControl.toLowerCase()) {
      case "blitz":
        return Images.blitz;
      case "bullet":
        return Images.bullet;
      case "rapid":
        return Images.rapid;
      default:
        return undefined;
    }
  };

  return (
    <GestureHandlerRootView style={StyleSheet.absoluteFillObject}>
      <BottomSheet
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        backgroundStyle={styles.sheetBackground}
        handleIndicatorStyle={styles.indicator}
        animateOnMount={true}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text style={styles.title}>RECENT MATCHES</Text>

          {recentMatches.map((match, index) => (
            <View key={match.id}>
              <View style={styles.matchRow}>
                <View style={styles.leftSection}>
                  <Image
                    source={{ uri: getIconForTimeControl(match.timeControl) }}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                  <Text style={styles.timeControl}>{match.timeControl}</Text>
                </View>

                <View style={styles.middleSection}>
                  <Image
                    source={{ uri: match.opponentAvatar }}
                    style={styles.avatar}
                  />
                  <Text style={styles.opponent}>{match.opponent}</Text>
                </View>

                <View style={styles.rightSection}>
                  <Text
                    style={[
                      styles.result,
                      {
                        color: match.result === "Win" ? "#22C55E" : "#EF4444",
                      },
                    ]}
                  >
                    {match.result}
                  </Text>
                </View>
              </View>

              {index !== recentMatches.length - 1 && (
                <View style={styles.dividerContainer}>
                  <View style={styles.divider} />
                </View>
              )}
            </View>
          ))}
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  sheetBackground: {
    backgroundColor: "#141821",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  indicator: {
    backgroundColor: "#3B82F6",
    width: 80,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 13,
    marginBottom: 10,
    fontFamily: "Inter_500Medium",
  },
  matchRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  leftSection: {
    width: 80,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 6,
  },
  timeControl: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Inter_400Regular",
  },
  middleSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 30,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 20,
    marginRight: 8,
  },
  opponent: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Inter_400Regular",
  },
  rightSection: {
    width: 60,
    alignItems: "flex-end",
    marginRight: 10,
  },
  result: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
  },
  dividerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    height: 1.5,
    backgroundColor: "#3B82F6",
    width: "85%",
  },
});

export default RecentMatchesSlider;
