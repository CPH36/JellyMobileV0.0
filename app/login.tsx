import React, { useState } from 'react';
import {
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useAuth } from '../context/AuthContext';

const Page = () => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');
  const { onLogin } = useAuth();

  const onSignInPress = async () => {
    onLogin!(username, password);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {/* Image Above Header */}
      <Image source={require('../assets/jelly_logo.png')} style={styles.image} />

      {/* Login Header */}
      <Text style={styles.header}>Jelly Portal Login</Text>

      {/* Input Fields */}
      <TextInput
        autoCapitalize="none"
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.inputField}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.inputField}
      />

      {/* Sign In Button */}
      <TouchableOpacity onPress={onSignInPress} style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  image: {
    width: 120, // Adjust width
    height: 120, // Adjust height
    marginBottom: 15, // Space between image and header
  },
  header: {
    fontSize: 30,
    color: 'white',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  inputField: {
    width: '80%',
    marginVertical: 10,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#1E1E1E', // Darker input field
    color: 'white', // White text
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 4,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Page;
