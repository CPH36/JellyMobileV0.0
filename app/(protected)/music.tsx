import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';
import { LinearGradient } from 'expo-linear-gradient';

const videoLinks = [
	{ id: 'T1-_vOYFLK4', title: 'Glow' },
	{ id: 'fwC4tfdaitI', title: 'Jelly Flow' },
	{ id: 'X2czVTOCXv8', title: 'Drifting Deep' },
	{ id: 'WwATLIMgLiA', title: 'Rise & Flow' },
	{ id: 'tBJbD65MOg0', title: 'JellyFish Glide' },
	{ id: 'fjX1jP__f4E', title: 'Inside My Mind' },
	{ id: 'aunJ7h13zfw', title: 'Jelly In My Pocket' },
	{ id: 'kD6GKyqnuSc', title: 'Crypto Waves' },
	{ id: 'Y56atKSR0Do', title: 'Money Moves Slippery' },
	{ id: 'oCAN7mj-yyA', title: 'Blasting Off' },
];

const MusicPage = () => {
	return (
		<ImageBackground source={require('../../assets/jelly_dj.png')} style={styles.background}>
			{/* Gradient Fade Effect */}
			<LinearGradient
				colors={['rgba(5, 0, 30, 1)', 'rgba(5, 0, 30, 0.5)', 'rgba(5, 0, 30, 0)']}
				style={styles.gradient}
			/>

			{/* Floating Header */}
			<View style={styles.header}>
				<Text style={styles.title}>🎶 JELLY BEATS 🎶</Text>
				<Text style={styles.subtitle}>Come Dance In The Sea With Us!</Text>
			</View>

			{/* Video List */}
			<ScrollView contentContainerStyle={styles.videoList}>
				<View style={styles.videoGrid}>
					{videoLinks.map((video) => (
						<View key={video.id} style={styles.videoContainer}>
							<WebView
								style={styles.video}
								source={{ uri: `https://www.youtube.com/embed/${video.id}` }}
							/>
							<TouchableOpacity onPress={() => console.log(`Opening ${video.title}`)}>
								<Text style={styles.videoTitle}>{video.title.toUpperCase()}</Text>
							</TouchableOpacity>
						</View>
					))}
				</View>
			</ScrollView>
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

	gradient: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		height: 150, // Controls how much fade is visible
		zIndex: 1,
	},

	header: {
		position: 'absolute',
		top: 30,
		left: 0,
		right: 0,
		alignItems: 'center',
		zIndex: 2, // Stays above content
	},

	title: {
		fontSize: 36,
		fontWeight: 'bold',
		color: '#00F5AB', // Electric neon green-blue
		textAlign: 'center',
		fontFamily: 'monospace',
		textShadowColor: '#8A2BE2', // Bright neon purple
		textShadowOffset: { width: 3, height: 3 },
		textShadowRadius: 10,
		letterSpacing: 2,
	},

	subtitle: {
		fontSize: 20,
		color: '#00D1A6',
		textAlign: 'center',
		fontFamily: 'monospace',
		fontStyle: 'italic',
		textShadowColor: '#8A2BE2',
		textShadowOffset: { width: 2, height: 2 },
		textShadowRadius: 6,
		marginBottom: 20,
	},

	videoList: {
		alignItems: 'center',
		paddingTop: 100, // Ensures smooth blend into header
		paddingBottom: 50,
	},

	videoGrid: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		width: '100%',
		paddingHorizontal: 10,
	},

	videoContainer: {
		width: '48%', // Ensures two per row
		marginBottom: 15,
		alignItems: 'center',
	},

	video: {
		width: 150,
		height: 90,
		borderRadius: 10,
	},

	videoTitle: {
		color: '#00FFFF',
		fontSize: 16,
		fontWeight: 'bold',
		marginTop: 5,
		fontFamily: 'monospace',
		textShadowColor: '#8A2BE2',
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 6,
		textAlign: 'center',
		letterSpacing: 1.2,
	},
});

export default MusicPage;
