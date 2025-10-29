import React, { useMemo, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const RecentMatchesSlider = () => {
  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["40%", "75%", "90%"], []);

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
          <Text style={styles.title}>Recent Matches</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  sheetBackground: {
    backgroundColor: "#10141F",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  indicator: {
    backgroundColor: "#3B82F6",
    width: 80,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 18,

    marginBottom: 10,
  },
  item: {
    color: "#FFFFFF",
    fontSize: 16,
    paddingVertical: 5,
  },
});

export default RecentMatchesSlider;
