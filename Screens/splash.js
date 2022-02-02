import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

const Splash = ({ navigation }) => {
  const goToHomeScreen = () => {
    navigation.navigate("Home");
    console.log("I'm Going Hommmmeeeee!");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/headphone-splash.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.textContainer}>
          <Text style={styles.header}>Wireless</Text>
          <Text style={styles.sub}>Headphones</Text>
        </View>

        <View style={styles.introBtnContainer}>
          <TouchableOpacity
            style={[styles.introBtn, styles.elevation]}
            onPress={goToHomeScreen}
          >
            <Text style={styles.introBtntext}> Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    color: "white",
    padding: 5,
    fontSize: 30,
    textAlign: "center",
  },
  sub: {
    color: "white",
    padding: 5,
    fontWeight: "bold",
    fontSize: 50,
    textAlign: "center",
  },
  textContainer: {
    padding: 15,
    position: "absolute",
    top: 150,
    alignItems: "flex-start",
  },
  introBtnContainer: {
    padding: 70,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  introBtn: {
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 30,
  },
  elevation: {
    elevation: 100,
    shadowColor: "#F5F5F5",
  },
  introBtntext: {
    fontWeight: "bold",
  },
});
