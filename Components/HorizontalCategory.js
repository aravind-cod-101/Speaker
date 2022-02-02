import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";

const HorizontalCategory = () => {
  const category = [
    { id: "1", text: "Noise-Cancelling" },
    { id: "2", text: "Home Theatre" },
    { id: "3", text: "Soundbar" },
    { id: "4", text: "Noise-Cancelling" },
    { id: "5", text: "Home Theatre" },
    { id: "6", text: "Soundbar" },
    { id: "7", text: "Noise-Cancelling" },
    { id: "8", text: "Home Theatre" },
    { id: "9", text: "Soundbar" },
  ];

  return (
    <View style={styles.horic}>
      <View style={styles.horicList}>
        <FlatList
          data={category}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <View style={[styles.horicListBox, styles.elevation]}>
                  <Text style={styles.horicListText}>{item.text}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default HorizontalCategory;

const styles = StyleSheet.create({
  horic: {
    justifyContent: "space-evenly",
  },

  horicListBox: {
    marginLeft: 10,
    backgroundColor: "black",
    padding: 13,
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
  },
  horicListText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  elevation: {
    elevation: 100,
  },
});
