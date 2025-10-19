import { SafeAreaView } from "react-native-safe-area-context";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Images } from "@/assets/images/Images";
import LogoWithText from "@/components/LogoWithText";
import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Button1, Button2 } from "@/components/Buttons";

const SignIn = () => {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
  });

  return (
    <SafeAreaView style={styles.main}>
      <LogoWithText />
      <Text style={styles.heading}>Sign In</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor="#757575"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#757575"
        style={styles.input}
      />
      <View style={{ width: "100%", marginTop: 30 }}>
        <Button1 text="Sign In" onPress={() => {}} />
      </View>
      <Button2 text="Sign In with Google" imagePath={Images.google} />
      <Button2 text="Continue as a Guest" />
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.text}>Forgot Password</Text>
      </TouchableOpacity>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
      >
        <Text style={styles.text}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.linkText}>Sign Up</Text>
        </TouchableOpacity>
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
  logoImg: {
    height: 150,
    width: 300,
    resizeMode: "contain",
  },
  heading: {
    color: "#fff",
    fontSize: 40,
    fontFamily: "Inter_700Bold",
    // marginTop: 30,
  },
  input: {
    width: "90%",
    height: 50,
    borderColor: "#5A5A5A",
    borderWidth: 1,
    backgroundColor: "#2C2C2C",
    fontFamily: "Inter_400Regular",
    fontSize: 22,
    borderRadius: 8,
    paddingHorizontal: 20,
    color: "#fff",
    marginTop: 20,
  },
  text: {
    color: "#9A9A9F",
    fontSize: 20,
  },
  linkText: {
    color: "#3B82F6",
    fontSize: 20,
  },
});

export default SignIn;
