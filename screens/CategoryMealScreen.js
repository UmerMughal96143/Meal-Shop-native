import React from "react";
import { StyleSheet, Text, View, Button, Platform } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MealItems from "../components/MealItems";
import { CATEGORIES, MEALS } from "../data/DummuData";

export default function CategoryMealScreen(props) {
  const renderedMealItems = (itemData) => {
    return <MealItems itemData={itemData} onSelect={() => {
      props.navigation.navigate({routeName : 'MealDetailScreen' , params : {mealId : itemData.item.id}})
    }}/>;
  };

  let catId = props.navigation.getParam("categoryId");
  let displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderedMealItems}
        keyExtractor={(item, index) => item.id}
        style={{width : '100%'}}
      />
    </View>
  );
}

CategoryMealScreen.navigationOptions = (navigationData) => {
  let catId = navigationData.navigation.getParam("categoryId");
  let result = CATEGORIES.find((item) => item.id == catId);
  return {
    headerTitle: result.title,
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
