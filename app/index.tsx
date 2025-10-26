import { Link, Redirect } from "expo-router";
import { View, Text } from "react-native";

const Index = () => {
  return (
    <View>
      <Redirect href="/pages/Intro" />
      {/* <Redirect href="/pages/authentication/ResetPassword" /> */}
    </View>
  );
};

export default Index;
