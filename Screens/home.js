import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import TopBar from "../Components/Topbar";
import Searchbar from "./../Components/Searchbar";
import CarouselList from "../Components/CarouselList";
import HorizontalCategory from "./../Components/HorizontalCategory";
import HorizontalProduct from "./../Components/HorizontalProduct";
const Home = () => {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <View>
        {/* Create an overhead container to make the statusbar visible */}
        <View style={styles.statusBar} />

        {/* Topbar */}
        <TopBar />
        {/* Header Text */}
        <View style={styles.homeMainTextContainer}>
          <Text style={styles.homeMainText}>Discover Your Best</Text>
        </View>
        {/* SearchBar */}
        <Searchbar />
        {/* Carousel */}
        <CarouselList />
        {/* Horizontal Category */}
        <HorizontalCategory />

        {/* Horizontal Product Listing  */}

        <HorizontalProduct />
        {/* Bottom Nav Bar */}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "#171717",
    flex: 1,
  },

  statusBar: {
    height: Constants.statusBarHeight,
  },
  homeMainTextContainer: {
    paddingVertical: 30,
    paddingHorizontal: 40,
  },
  homeMainText: {
    fontWeight: "bold",
    fontSize: 27,
    color: "white",
  },
});
