import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function FilterScreen() {
    return (
        <View style={styles.container}>
            <Text>Meal Filter Screen </Text>
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
  