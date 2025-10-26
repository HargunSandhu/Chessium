import { Button1 } from "@/components/Buttons";
import LogoWithText from "@/components/LogoWithText";
import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { OtpInput } from "react-native-otp-entry";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { supabase } from "../../lib/Supabase";

const VerifyEmail = () => {
  const router = useRouter();
  const { email } = useLocalSearchParams(); // ✅ get email from navigation params
  const [otpCode, setOtpCode] = useState("");
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
  });

  const verifyEmailHandler = async () => {
    if (!otpCode.trim()) {
      Alert.alert("Error", "Please enter the 6-digit code.");
      return;
    }

    const safeEmail = Array.isArray(email) ? email[0] : email;

    if (!safeEmail) {
      Alert.alert("Error", "Email not found. Please go back and try again.");
      return;
    }

    const { data, error } = await supabase.auth.verifyOtp({
      email: safeEmail,
      token: otpCode,
      type: "email",
    });

    if (error) {
      console.log("OTP verify error:", error);
      Alert.alert("Error", error.message);
    } else {
      console.log("Email verified:", data);
      Alert.alert("Success", "Email verified successfully!");
      router.push("/pages/authentication/ResetPassword");
    }
  };

  const resendEmail = async () => {
    const safeEmail = Array.isArray(email) ? email[0] : email;

    if (!safeEmail) {
      Alert.alert("Error", "No email found.");
      return;
    }

    const { error } = await supabase.auth.signInWithOtp({
      email: safeEmail, // ✅ use safeEmail here
      options: {
        emailRedirectTo: "chessium://app/pages/authentication/VerifyEmail",
      },
    });

    if (error) {
      console.log("Resend error:", error);
      Alert.alert("Error", error.message);
    } else {
      Alert.alert("Success", "A new OTP has been sent to your email.");
    }
  };

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.main}>
      <LogoWithText />
      <Text style={styles.heading}>Verify Email</Text>

      <View style={{ width: "90%", marginTop: 30 }}>
        <Text style={styles.text}>
          We have sent a 6-digit code to your email address.
        </Text>
        <Text style={styles.text}>
          Please enter it below to verify your account.
        </Text>
      </View>

      <OtpInput
        numberOfDigits={6}
        focusColor="#3B82F6"
        autoFocus
        secureTextEntry={false}
        onTextChange={setOtpCode}
        theme={{
          containerStyle: {
            justifyContent: "center",
            columnGap: 4, // reduces spacing between boxes even more
          },
          pinCodeContainerStyle: {
            borderColor: "#3B82F6",
            marginTop: 40,
            marginBottom: 20,
            borderWidth: 1.5,
            borderRadius: 10,
            backgroundColor: "#141821",
          },
          pinCodeTextStyle: {
            color: "#fff",
            fontSize: 20,
            fontFamily: "Inter_700Bold",
          },
        }}
      />

      <TouchableOpacity
        onPress={() => router.navigate("/pages/authentication/ForgotPassword")}
      >
        <Text style={styles.text}>Change Email</Text>
      </TouchableOpacity>

      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
      >
        <Text style={styles.text}>Didn't receive the code? </Text>
        <TouchableOpacity onPress={resendEmail}>
          <Text style={styles.linkText}>Resend</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 40, width: "100%" }}>
        <Button1 text="Confirm" onPress={verifyEmailHandler} />
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
  heading: {
    color: "#fff",
    fontSize: 40,
    fontFamily: "Inter_700Bold",
  },
  text: {
    color: "#9A9A9F",
    fontSize: 18,
    lineHeight: 24,
    fontFamily: "Inter_400Regular",
  },
  linkText: {
    color: "#3B82F6",
    fontSize: 20,
    fontFamily: "Inter_400Regular",
  },
});

export default VerifyEmail;
