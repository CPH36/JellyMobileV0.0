import { useRouter } from 'expo-router';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';

const RewardsPage = () => {
	const router = useRouter();

	const onBackPressed = () => {
		router.back(); // Navigate back
	};

	return (
		<ImageBackground source={require('../../assets/jelly_throne.png')} style={styles.background}>
			<View style={styles.overlay}>
				<Text style={styles.title}>🎁 Jelly Rewards 🎁</Text>
				<Text style={styles.subtitle}>Claim your rewards and reign supreme!</Text>

				<TouchableOpacity style={styles.rewardButton}>
					<Text style={styles.rewardText}>Coming Soon!</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.backButton} onPress={onBackPressed}>
					<Text style={styles.backText}>Back</Text>
				</TouchableOpacity>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		resizeMode: 'cover',
		width: '100%',
		height: '100%',
	},

	overlay: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
	},

	title: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#FFD700', // Gold color
		textAlign: 'center',
		marginBottom: 10,
	},

	subtitle: {
		fontSize: 18,
		color: '#FFF',
		textAlign: 'center',
		marginBottom: 20,
	},

	rewardButton: {
		backgroundColor: '#00FF7F', // Green button
		paddingVertical: 12,
		paddingHorizontal: 40,
		borderRadius: 10,
		elevation: 5,
		marginBottom: 20,
	},

	rewardText: {
		color: '#000',
		fontSize: 18,
		fontWeight: 'bold',
	},

	backButton: {
		backgroundColor: 'Blue', 
		paddingVertical: 12,
		paddingHorizontal: 40,
		borderRadius: 10,
		elevation: 5,
	},

	backText: {
		color: '#FFF',
		fontSize: 18,
		fontWeight: 'bold',
	},
});

export default RewardsPage;
