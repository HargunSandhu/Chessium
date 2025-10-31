import React, { useMemo, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const RecentMatchesSlider = () => {
  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["40%", "75%", "90%"], []);
  const recentMatches = [
    {
      id: 1,
      timeControl: "blitz",
      opponent: "Player1",
      opponentAvatar: "",
      result: "Win",
      eloAfter: 1234,
      eloChange: +10,
    },
    {
      id: 2,
      timeControl: "bullet",

      opponent: "Player2",
      opponentAvatar: "",
      result: "Loss",
      eloAfter: 1220,
      eloChange: -14,
    },
    {
      id: 3,
      timeControl: "rapid",
      opponent: "Player3",
      opponentAvatar: "",
      result: "Win",
      eloAfter: 1240,
      eloChange: +20,
    },
  ];

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
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
  item: {
    color: "#FFFFFF",
    fontSize: 16,
    paddingVertical: 5,
  },
});

export default RecentMatchesSlider;
