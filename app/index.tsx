import { Link, Redirect } from "expo-router";
import { View, Text } from "react-native";

const Index = () => {
  return (
    <View>
      <Redirect href="/pages/Intro" />
    </View>
  );
};

export default Index;
