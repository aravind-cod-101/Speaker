import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const TopBar = () => {
  return (
    <View style={styles.topContainer}>
      <MaterialIcons name="category" size={24} color="white" />
      <Entypo name="notification" size={24} color="white" />
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topContainer: {
    height: 70,
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 40,
  },
});
