import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function FavouriteScreen() {
    return (
        <View style={styles.container}>
            <Text> Meal Favourite screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex : 1 ,
      backgroundColor : 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  