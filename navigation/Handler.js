import { createAppContainer } from "react-navigation";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { createStackNavigator } from "react-navigation-stack";
import HeaderButton from "../components/HeaderButton";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import FilterScreen from "../screens/FilterScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import React from 'react'

const NavigationHandler = createStackNavigator(
  {
    CategoriesScreen: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meal Categories",
      },
    },
    CategoryMealScreen: CategoryMealScreen,
    FavouriteScreen: FavouriteScreen,
    FilterScreen: FilterScreen,
    MealDetailScreen: MealDetailScreen,
  },
  {
    initialRouteName: "CategoriesScreen",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? "#4a148c" : "",
      },

      headerTintColor: Platform.OS === "android" ? "white" : "",
      headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favourite"
            iconName={"ios-star"}
            onPress={() => console.log("Fav button Preessed")}
          />
        </HeaderButtons>
      ),
    },
  }
);

export default createAppContainer(NavigationHandler);
