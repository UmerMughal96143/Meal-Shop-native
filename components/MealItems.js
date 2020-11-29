import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { withOrientation } from "react-navigation";

export default function MealItems({ itemData, onSelect }) {
  console.log(itemData.item.imageUrl);
  return (
    <View style={styles.menuItem}>
      <TouchableOpacity onPress={onSelect}>
        <View>
          <View style={{ ...styles.textRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: itemData.item.imageUrl }}
              style={styles.imgBg}
            >
              <Text numberOfLines={1} style={styles.title}>{itemData.item.title}</Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.textRow, ...styles.mealDetail }}>
            <Text>{itemData.item.duration} m</Text>
            <Text>{itemData.item.affordability}</Text>
            <Text>{itemData.item.complexity.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    height: 200,
    backgroundColor: "#ccc",
    width: "100%",
    borderRadius : 10,
    overflow : 'hidden',
    marginVertical :10
  },
  textRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height : '15%'
  },
  imgBg: {
    width: "100%",
    height: "100%",
    justifyContent : 'flex-end'
  },
  title: {
    fontSize: 22,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.7)",
    paddingVertical: 5,
    paddingHorizontal: 30,
  },
});
