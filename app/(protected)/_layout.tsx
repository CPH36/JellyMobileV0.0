import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Role, useAuth } from '../../context/AuthContext';
import { Text } from 'react-native';


const DrawerLayout = () => {
	const { authState } = useAuth();

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer
				screenOptions={{
					drawerStyle: {
						backgroundColor: '#262626', // 
					},
					drawerLabelStyle: {
						color: '#FFFFFF', // Bright white text for contrast
						textShadowColor: '#121212', // Dark mode
						textShadowOffset: { width: 1, height: 0 },
						textShadowRadius: 12, // Stronger Glow Effect
					},
					drawerActiveBackgroundColor: '#003366', // Deep Blue for active item
					drawerActiveTintColor: '#00FFFF', // Bright Blue for active text
					drawerInactiveTintColor: '#CCCCCC', // Light gray for inactive items
					headerStyle: {
						backgroundColor: '#121212', // Dark header background
						shadowColor: '#121212', // Blue glow on header
						shadowOpacity: 1,
						shadowRadius: 15,
						elevation: 10, // Android shadow
					},
					headerTintColor: '#00FFFF', // Bright blue header buttons
					headerTitleStyle: {
						color: '#FFFFFF', // White header text for better readability
						textShadowColor: '#00FFFF', // Neon blue glow
						textShadowOffset: { width: 0, height: 0 },
						textShadowRadius: 15, // Extra glow
					},
				}}
			>
				<Drawer.Screen
					name="index"
					options={{
						headerTitle: 'Home',
						drawerLabel: ({ color }) => (
							<Text style={{ color: '#b3b6b7', fontSize: 16 }}>Home</Text>
						),
						drawerIcon: ({ size, color }) => (
							<Ionicons 
								name="home-outline" 
								size={size} 
								color={color} 
								style={{
									color:"#33FFCC",
									textShadowColor: '#000d1a', 
									textShadowOffset: { width: 0, height: 0 },
									textShadowRadius: 12,
								}}
							/>
						),
					}}
					redirect={authState?.authenticated === null}
				/>

				<Drawer.Screen
					name="faucet"
					options={{
						headerTitle: 'Faucet',
						drawerLabel: ({ color }) => (
							<Text style={{ color: '#b3b6b7', fontSize: 16 }}>Faucet</Text>
						),
						drawerIcon: ({ size, color }) => (
							<Ionicons 
								name="water-outline" 
								size={size} 
								color={color} 
								style={{
									color:"#00CCFF",
									textShadowColor: '#00FFFF',
									textShadowOffset: { width: 0, height: 0 },
									textShadowRadius: 12,
								}}
							/>
						),
					}}
					redirect={authState?.role !== Role.USER}
				/>

				<Drawer.Screen
					name="rewards"
					options={{
						headerTitle: 'Jelly Rewards',
						drawerLabel: ({ color }) => (
							<Text style={{ color: '#b3b6b7', fontSize: 16 }}>Rewards</Text>
						),
						drawerIcon: ({ size, color }) => (
							<Ionicons 
								name="diamond-outline" 
								size={size} 
								color={color} 
								style={{
									color:"#FFFF00",
									textShadowColor: '#FFFF00',
									textShadowOffset: { width: 0, height: 0 },
									textShadowRadius: 10,
								}}
							/>
						),
					}}
					redirect={authState?.role !== Role.USER}
				/>

				<Drawer.Screen
					name="music"
					options={{
						headerTitle: 'Music Videos',
						drawerLabel: ({ color }) => (
							<Text style={{ color: '#b3b6b7', fontSize: 16 }}>Music</Text>
						),
						drawerIcon: ({ size, color }) => (
							<Ionicons 
								name="musical-notes-outline" 
								size={size} 
								color={color} 
								style={{
									color:"#99FF66",
									textShadowColor: '#00FFFF',
									textShadowOffset: { width: 0, height: 0 },
									textShadowRadius: 12,
								}}
							/>
						),
					}}
					redirect={authState?.role !== Role.USER}
				/>

				<Drawer.Screen
					name="marketplace"
					options={{
						headerTitle: 'Marketplace',
						drawerLabel: ({ color }) => (
							<Text style={{ color: '#b3b6b7', fontSize: 16 }}>Marketplace</Text>
						),
						drawerIcon: ({ size, color }) => (
							<Ionicons 
								name="card-outline" 
								size={size} 
								color={color} 
								style={{
									color:"#4fc3f7",
									textShadowColor: '#4fc3f7',
									textShadowOffset: { width: 0, height: 0 },
									textShadowRadius: 12,
								}}
							/>
						),
					}}
					redirect={authState?.role !== Role.USER}
				/>

				<Drawer.Screen
					name="leaderboard"
					options={{
						headerTitle: 'LeaderBoard',
						drawerLabel: ({ color }) => (
							<Text style={{ color: '#b3b6b7', fontSize: 16 }}>Leaderboard</Text>
						),
						drawerIcon: ({ size, color }) => (
							<Ionicons 
								name="people-outline" 
								size={size} 
								color={color} 
								style={{
									color: "#58d68d",
									textShadowColor: '#58d68d',
									textShadowOffset: { width: 0, height: 0 },
									textShadowRadius: 12,
								}}
							/>
						),
					}}
					redirect={authState?.role !== Role.USER}
				/>

				<Drawer.Screen
					name="news"
					options={{
						headerTitle: 'Newsfeed',
						drawerLabel: ({ color }) => (
							<Text style={{ color: '#b3b6b7', fontSize: 16 }}>News</Text>
						),
						drawerIcon: ({ size, color }) => (
							<Ionicons 
								name="newspaper-outline" 
								size={size} 
								color={color} 
								style={{
									textShadowColor: '#1ad1ff',
									textShadowOffset: { width: 0, height: 0 },
									textShadowRadius: 12,
								}}
							/>
						),
					}}
					redirect={authState?.role !== Role.USER}
				/>
			
			    <Drawer.Screen
					name="logout"
					options={{
						headerTitle: 'logout',
						drawerLabel: ({ color }) => (
							<Text style={{ color: '#e57373', fontSize: 16 }}>Logout</Text>
						),
						drawerIcon: ({ size, color }) => (
							<Ionicons 
								name="log-out" 
								size={size} 
								color={color} 
								style={{
									color:"#78281f",
									textShadowColor: '#00FFFF',
									textShadowOffset: { width: 0, height: 0 },
									textShadowRadius: 12,
								}}
							/>
						),
					}}
					redirect={authState?.role !== Role.USER}
				/>

				<Drawer.Screen
					name="admin"
					options={{
						headerTitle: 'Admin Area',
						drawerLabel: 'Admin',
						drawerIcon: ({ size, color }) => (
							<Ionicons 
								name="flash-outline" 
								size={size} 
								color={color} 
								style={{
									textShadowColor: '#00FFFF',
									textShadowOffset: { width: 0, height: 0 },
									textShadowRadius: 12,
								}}
							/>
						),
					}}
					redirect={authState?.role !== Role.ADMIN}
				/>
			</Drawer>
		</GestureHandlerRootView>
	);
};

export default DrawerLayout;
