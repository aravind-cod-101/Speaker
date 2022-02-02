import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  FlatList,
} from "react-native";
import Carousel from "./Carousel";

const CarouselList = () => {
  const carouselImages = [
    {
      id: 1,
      url: require("../assets/carousel1.jpg"),
    },
    {
      id: 2,
      url: require("../assets/carousel2.jpg"),
    },
  ];
  if (carouselImages && carouselImages.length) {
    return (
      <View style={styles.carouselContainer}>
        <FlatList
          data={carouselImages}
          keyExtractor={(item, index) => "key" + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <Carousel item={item} />;
          }}
        />
      </View>
    );
  }
};

export default CarouselList;

const styles = StyleSheet.create({
  carouselContainer: {},
});
