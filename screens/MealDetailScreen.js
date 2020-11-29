import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/DummuData'

export default function MealDetailScreen(props) {
    let mealId = props.navigation.getParam("mealId")
    let mealDetails = MEALS.find((item) => item.id === mealId)
    return (
        <View style={styles.container}>
            <Text>Meal Detail Screen</Text>
        </View>
    )
}

MealDetailScreen.navigationOptions= (navigationData) => {
    let mealId = navigationData.navigation.getParam("mealId")
    let mealDetails = MEALS.find((item) => item.id === mealId)

    return {
        headerTitle : mealDetails.title
    }
}

const styles = StyleSheet.create({
    container: {
      flex : 1 ,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  