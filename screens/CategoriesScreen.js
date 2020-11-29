import React from "react";
import {
  StyleSheet,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CategoryCards from "../components/CategoryCards";
import { CATEGORIES } from "../data/DummuData";

export default function CategoriesScreen(props) {
  const categoreies = (itemData) => {
    return (
      <CategoryCards
        title={itemData.item.title}
        onSelect={() =>
          props.navigation.navigate({
            routeName: "CategoryMealScreen",
            params: {
              categoryId: itemData.item.id,
            },
          })
        }
        color={itemData.item.color}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={categoreies}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
