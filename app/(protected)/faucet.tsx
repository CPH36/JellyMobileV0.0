import { useRouter } from 'expo-router';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Animated } from 'react-native';
import { useAuth, Role } from '../../context/AuthContext';
import WithRole from '../../components/WithRole';
import React, { useState, useEffect } from 'react';

const Page = () => {
	const { authState, onLogout } = useAuth();
	const router = useRouter();

	const [scaleAnim] = useState(new Animated.Value(1)); // Initial scale value for animation
	const [linkedInfo, setLinkedInfo] = useState<any>(null); // State to hold linked information
	const [isLoading, setIsLoading] = useState(true); // Loading state for fetching data

	// Fetch wallet stats data using login info
	useEffect(() => {
		const fetchData = async () => {
			try {
				// Assuming you have a token or session ID to authenticate the request
				const token = authState?.token; // or use other stored login info

				// Make a request to wallet.php (adjust URL and headers as needed)
				const response = await fetch('https://web3.jellyfc.com/wallet.php', {
					method: 'GET', // or 'POST' depending on how it's set up
					headers: {
						'Authorization': `Bearer ${token}`, // Add authentication if required
						'Content-Type': 'application/json', // Or any other content type your API expects
					},
				});

				// Check for a successful response
				if (response.ok) {
					const data = await response.json();
					setLinkedInfo(data); // Store the response data in state
				} else {
					console.error('Failed to fetch data:', response.status);
				}
			} catch (error) {
				console.error('Error fetching data:', error);
			} finally {
				setIsLoading(false); // Set loading to false once the request is completed
			}
		};

		fetchData();
	}, [authState?.token]); // Re-run the effect if the authState.token changes

	const onLogoutPressed = () => {
		onLogout!();
		router.replace("../../login");
	};

	const onDripPressed = () => {
		console.log("Drip button pressed!");
		// Add functionality here (e.g., claim faucet rewards)
	};

	// Handle button press animation
	const handlePressIn = () => {
		Animated.spring(scaleAnim, {
			toValue: 1.1, // Increase scale for "pressed" effect
			useNativeDriver: true,
		}).start();
	};

	const handlePressOut = () => {
		Animated.spring(scaleAnim, {
			toValue: 1, // Return scale to normal
			useNativeDriver: true,
		}).start();
	};

	return (
		<ImageBackground source={require('../../assets/drip_1.png')} style={styles.background}>
			<View style={styles.overlay}>
				<View style={styles.content}>
					<Text style={styles.title}>Official JellyFC Faucet</Text>
					<Text style={styles.title}>User Name: {authState?.role}</Text>
					<View style={styles.separator} />

					<WithRole role={Role.ADMIN}>
						<Text style={styles.roleText}>Only visible for admins</Text>
					</WithRole>

					<WithRole role={Role.USER}>
						<Text style={styles.roleText}>Tap the Drip - Get Your Jelly</Text>
					</WithRole>

					{/* Display Linked Information (Wallet Stats) */}
					{isLoading ? (
						<Text style={styles.loadingText}>Loading wallet stats...</Text>
					) : linkedInfo ? (
						<View style={styles.infoBox}>
							<Text style={styles.infoText}>Balance: {linkedInfo.balance}</Text>
							<Text style={styles.infoText}>Transactions: {linkedInfo.transactions}</Text>
							<Text style={styles.infoText}>Wallet Address: {linkedInfo.walletAddress}</Text>
						</View>
					) : (
						<Text style={styles.infoText}>Failed to load wallet information</Text>
					)}

					{/* Animated Drip Button in the Middle */}
					<Animated.View style={[styles.dripButton, { transform: [{ scale: scaleAnim }] }]}>
						<TouchableOpacity
							onPressIn={handlePressIn}
							onPressOut={handlePressOut}
							onPress={onDripPressed}
						>
							<Text style={styles.dripText}>Drip</Text>
						</TouchableOpacity>
					</Animated.View>
				</View>

				{/* Logout Button at the Bottom */}
				<TouchableOpacity style={styles.logoutButton} onPress={onLogoutPressed}>
					<Text style={styles.logoutText}>Logout</Text>
				</TouchableOpacity>
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
		justifyContent: 'space-between', 
		width: '100%',
		height: '100%',
		paddingBottom: 20, 
	},

	content: {
		alignItems: 'center',
	},

	title: {
		fontSize: 24,
		fontFamily:"monospace",
		fontWeight: 'bold',
		color: '#76d7c4', 
		textAlign: 'center',
		marginBottom: 20,
	},

	roleText: {
		fontSize: 20, 
		color: '#ff80ff',  
		marginBottom: 20,
		fontFamily: 'monospace',
		fontWeight: 'bold',
		textShadowColor: '#000',
		textShadowOffset: { width: 0, height: 1 },
		textShadowRadius: 5, 
		letterSpacing: 1.5,
	},

	separator: {
		height: 1,
		backgroundColor: '#ccc',
		marginVertical: 10,
		width: '80%',
	},

	/* Drip Button Styling */
	dripButton: {
		backgroundColor: '#00CCFF', 
		paddingVertical: 15,
		paddingHorizontal: 60,
		borderRadius: 30,
		marginTop: 300,
		elevation: 10, 
		shadowColor: 'gold',  
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 5.0,
		shadowRadius: 10,
	},

	dripText: {
		color: 'black',
		fontFamily:"monospace",
		fontSize: 26,
		fontWeight: 'bold',
		textAlign: 'center',
	},

	/* Logout Button Styling */
	logoutButton: {
		backgroundColor: 'red',
		paddingVertical: 12,
		paddingHorizontal: 50,
		borderRadius: 8,
		elevation: 6,
		shadowColor: '#000',  
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.3,
		shadowRadius: 10,
	},

	logoutText: {
		color: 'white',
		fontSize: 15,
		fontWeight: 'bold',
	},

	/* Info Box Styling */
	infoBox: {
		backgroundColor: '#333',
		padding: 20,
		borderRadius: 10,
		marginTop: 30,
		width: '80%',
		alignItems: 'center',
	},

	infoText: {
		color: '#fff',
		fontSize: 18,
		textAlign: 'center',
	},

	loadingText: {
		color: '#ff80ff',
		fontSize: 18,
		textAlign: 'center',
		marginTop: 20,
	},
});

export default Page;
