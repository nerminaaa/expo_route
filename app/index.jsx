import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';

export default function Index() {
    const [username, setUsername] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your username:</Text>

      <TextInput 
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        placeholderTextColor="#aaa"
      />

      <Link
        href={{
          pathname: '/details',
          params: { username },
        }}
        style={styles.link}>
        <Text style={styles.linkText}>View user details</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  link: {
    backgroundColor: '#f4511e',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  linkText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
