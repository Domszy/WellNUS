import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate("Login")}
      onDone={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              style={styles.image}
              source={require("../assets/chill_dribbble-01.webp")}
            />
          ),
          title: "Meditation",
          subtitle: "Start on your meditation journey with WellNUS!",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              style={styles.image}
              source={require("../assets/Onboarding-img1.jpeg")}
            />
          ),
          title: "Forum",
          subtitle: "Connect with your peers with WellNUS!",
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    padding: 10,
    width: 150,
    height: 150,
  },
});
