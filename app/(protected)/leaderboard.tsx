import { StyleSheet, Text, View, ImageBackground, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';

// Define the type for leaderboard items
interface LeaderboardItem {
  name: string;
  score: number;
}

const Page = () => {
  // Update the state type to use the LeaderboardItem interface
  const [leaderboard, setLeaderboard] = useState<LeaderboardItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch('https://web3.jellyfc.com/leaderboard.php');
        const data = await response.json();
        setLeaderboard(data);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <ImageBackground source={require('../../assets/jelly_Trophy.png')} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Official JellyFC Leaderboard</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#76d7c4" />
        ) : (
          <FlatList
            data={leaderboard}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.leaderboardItem}>
                <Text style={styles.rank}>{index + 1}.</Text>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.score}>{item.score}</Text>
              </View>
            )}
          />
        )}
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
  leaderboardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    width: '90%',
  },
  rank: {
    color: '#ffcc00',
    fontWeight: 'bold',
    fontSize: 18,
  },
  name: {
    color: '#ffffff',
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
  },
  score: {
    color: '#76d7c4',
    fontSize: 18,
  },
});

export default Page;
