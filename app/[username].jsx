import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  useLocalSearchParams } from "expo-router";

export default function details() {
    const { username } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text>Entered Username: {username}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})