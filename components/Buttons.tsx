import React from "react";
import {
  View,
  TouchableOpacity,
  GestureResponderEvent,
  Text,
  StyleSheet,
  Image,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import type { DimensionValue, ViewStyle } from "react-native";
import { Inter_600SemiBold, useFonts } from "@expo-google-fonts/inter";

type ButtonProps = {
  text?: string;
  width?: DimensionValue;
  height?: DimensionValue;
  onPress?: (event: GestureResponderEvent) => void;
  justifyContent?: ViewStyle["justifyContent"];
  imagePath?: string;
  imageSize?: number;
};

const Button1 = ({
  text,
  onPress,
  width = "90%",
  height = 64,
  justifyContent = "center",
}: ButtonProps) => {
  const [fontsLoaded] = useFonts({
    Inter_600SemiBold,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={[styles.container, { justifyContent, width: "100%", height }]}>
      <LinearGradient
        colors={["#3B82F6", "#2563EB", "#1E3A8A"]}
        style={[styles.gradient, { width, height }]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <TouchableOpacity
          onPress={onPress}
          style={[styles.button, { width: "100%", height: "100%" }]}
        >
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const Button2 = ({
  text,
  onPress,
  imagePath,
  imageSize = 30,
  width = "95%",
  height = 64,
}: ButtonProps) => {
  const showText = !!text;

  return (
    <View style={[styles.container, { width }]}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.buttonPlain, { height, width }]}
      >
        {showText ? (
          <View style={styles.row}>
            {imagePath && (
              <Image
                source={{ uri: imagePath }}
                style={{
                  marginRight: 12,
                  width: imageSize,
                  height: imageSize,
                }}
                resizeMode="contain"
              />
            )}
            <Text style={styles.text}>{text}</Text>
          </View>
        ) : (
          <View style={styles.iconWrapper}>
            {imagePath && (
              <Image
                source={{ uri: imagePath }}
                style={{
                  width: imageSize,
                  height: imageSize,
                }}
                resizeMode="contain"
              />
            )}
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
  },
  gradient: {
    borderRadius: 8,
    // width: "90%",
  },
  button: {
    height: 64,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPlain: {
    backgroundColor: "transparent",
    borderColor: "#3B82F6",
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "Inter_600SemiBold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  iconButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
    width: "100%",
  },
  iconButton: {
    backgroundColor: "transparent",
    borderColor: "#9B7CF9",
    borderWidth: 1,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  iconWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export { Button1, Button2 };
