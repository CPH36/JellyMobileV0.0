import { Stack, useRouter, useSegments } from 'expo-router';
import { AuthProvider, useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';

const StackLayout = () => {
	const { authState } = useAuth();
	const segments = useSegments();
	const router = useRouter();

	useEffect(() => {
		const inAuthGroup = segments[0] === '(protected)';

		if (!authState?.authenticated && inAuthGroup) {    
			router.replace("./login");
		} else if (authState?.authenticated === true) {
			router.replace('./(protected)');
		}
	}, [authState]);

	return (
		<Stack screenOptions={{ headerStyle: styles.header, headerTintColor: "#FFFFFF" }}>
			<Stack.Screen name="login" options={{ headerShown: false }} />
			<Stack.Screen name="(protected)" options={{ headerShown: false }} />
		</Stack>
	);
};

const RootLayoutNav = () => {
	return (
		<AuthProvider>
			<ThemeProvider value={DarkTheme}> {/* 🔹 Enforces Dark Mode */}
				<StatusBar style="light" /> {/* 🔹 White text in status bar */}
				<StackLayout />
			</ThemeProvider>
		</AuthProvider>
	);
};

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#121212", // Dark header
	},
	text: {
		color: "#FFFFFF", // 🔹 Bright White Text
		fontSize: 18, // Slightly larger font
		fontWeight: "bold",
	},
});

export default RootLayoutNav;