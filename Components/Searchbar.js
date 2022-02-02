import React, { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Searchbar = (props) => {
  const [txt, setTxt] = useState("");

  const searchQuery = (txt) => {
    console.log(txt);
  };

  return (
    <View style={styles.searchBoxContainer}>
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search"
          onChangeText={(text) => setTxt(text)}
          defaultValue={txt}
          style={styles.textBox}
        />
        <TouchableOpacity
          onPressIn={() => {
            console.log(txt);
          }}
        >
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  searchBoxContainer: {
    paddingHorizontal: 40,
  },
  searchBox: {
    backgroundColor: "white",
    shadowColor: "#171717",
    height: 50,
    borderRadius: 10,
    elevation: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  textBox: {
    flex: 1,
    height: 50,
  },
});
