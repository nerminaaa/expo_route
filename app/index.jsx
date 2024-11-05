import { StyleSheet, Text,TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';

export default function Index() {
    const [username, setUsername] = useState('')


  return (
    <View style={styles.container}>
      <Text>Index</Text>
      <Text>Enter your username:</Text>

      <TextInput 
        value={username}
        onChangeText={setUsername}
      />

      {/* <Link
        href={{
          pathname: '/[username]',
          params: { username },
        }}>
        View user details
      </Link> */}
      <Link
        href={{
          pathname: '/details',
          params: { username },
        }}>
        View user details
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({})