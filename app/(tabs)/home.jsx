import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from "expo-router";

export default function home() {
    const { username } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home page {username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 20,
    color: '#333',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});
