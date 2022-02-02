import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Carousel = ({ item }) => {
  return (
    <View style={styles.carousel}>
      <Image style={styles.imageCarousel} source={item.url} />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carousel: {
    width: width,
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderRadius: 20,
  },

  imageCarousel: {
    width: width - 20,
    height: height / 4,
    borderRadius: 20,
  },
});
