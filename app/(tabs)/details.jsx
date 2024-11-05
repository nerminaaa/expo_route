import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  useLocalSearchParams } from "expo-router";

export default function details() {
    const params = useLocalSearchParams(); 
    const { username } = params; 
    const { id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text>Details of user {id}</Text>
      <Text>Entered Username: {username}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})