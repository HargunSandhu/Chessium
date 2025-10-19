import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleProp, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";
import { Images } from "@/assets/images/Images";

type LogoWithTextProps = {
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
};

const LogoWithText: React.FC<LogoWithTextProps> = ({
  width = 300,
  height = 150,
  style,
}) => {
  const [svgXml, setSvgXml] = useState<string | null>(null);

  useEffect(() => {
    const loadSvg = async () => {
      try {
        const response = await fetch(Images.logo_with_text);
        const text = await response.text();
        setSvgXml(text);
      } catch (error) {
        console.error("Failed to load SVG:", error);
      }
    };
    loadSvg();
  }, []);

  if (!svgXml) {
    return <ActivityIndicator color="#fff" />;
  }

  return <SvgXml xml={svgXml} width={width} height={height} style={style} />;
};

export default LogoWithText;
