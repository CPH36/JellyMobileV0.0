import { StyleSheet, Text, View, ImageBackground, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { WebView } from 'react-native-webview';

const Page = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadStart = () => setLoading(true);
  const handleLoadEnd = () => setLoading(false);

  return (
    <ImageBackground source={require('../../assets/jelly_Brain.png')} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Official JellyFC Knowledge Base</Text>
        {loading && <ActivityIndicator size="large" color="#76d7c4" />}
        
        {/* WebView to load the knowledge library page */}
        <WebView
          source={{ uri: 'https://web3.jellyfc.com/knowledgelibrary.php' }}
          style={styles.webview}
          onLoadStart={handleLoadStart}
          onLoadEnd={handleLoadEnd}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: '#76d7c4',
    textAlign: 'center',
    marginBottom: 20,
  },
  webview: {
    flex: 1,
    width: '100%',
  },
});

export default Page;
