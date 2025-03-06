import React, { useState } from 'react';
import {
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import { useAuth } from '../context/AuthContext';
import { Video } from 'expo-av';  // Importing Video component from expo-av

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
      {/* Video Background */}
      <View style={styles.videoContainer}>
        <Video
          source={require('../assets/animated_background.mp4')}  // Replace with your video
          style={styles.video}
          resizeMode="cover"
          isLooping
          shouldPlay
        />
      </View>

    

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
    backgroundColor: 'transparent', // Make the background transparent so the video shows
  },
  videoContainer: {
    position: 'absolute',  // Position the video container behind everything else
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',  // Cover the whole screen
  },
  image: {
    width: 120, // Adjust width
    height: 120, // Adjust height
    marginBottom: 15, // Space between image and header
    zIndex: 1,  // Make sure the image stays on top of the video
  },
  header: {
    fontSize: 30,
    color: '#2EB8E2',
    fontFamily:"monospace",
    marginBottom: 350,
    fontWeight: 'bold',
    zIndex: 1,  // Make sure the header stays on top of the video
    textShadowColor: 'white',
		textShadowOffset: { width: 0, height: 0 },
		textShadowRadius: 12,
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
    zIndex: 1,  // Make sure input fields stay on top of the video
  },
  button: {
    marginBottom: 0,
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 4,
    width: '80%',
    zIndex: 1,  // Make sure button stays on top of the video
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Page;
