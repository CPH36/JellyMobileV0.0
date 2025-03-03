import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Role, useAuth } from '../../context/AuthContext';

const DrawerLayout = () => {
	const { authState } = useAuth();

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer>
				<Drawer.Screen
					name="index"
					options={{
						headerTitle: 'Home',
						drawerLabel: 'Home',
						drawerIcon: ({ size, color }) => (
							<Ionicons name="home-outline" size={size} color={color} />
						)
					}}
					redirect={authState?.authenticated === null}
					
				/>

				<Drawer.Screen
					name="faucet"
					
					options={{
						headerTitle: 'JellyFishCoin',
						drawerLabel: 'Faucet',
						drawerIcon: ({ size, color }) => (
							<Ionicons name="water-outline" size={size} color={color} />
						)
					}}
					redirect={authState?.role !== Role.USER}
				/>
				<Drawer.Screen
					name="rewards"
					
					options={{
						headerTitle: 'Jelly Rewards',
						drawerLabel: 'Rewards',
						drawerIcon: ({ size, color }) => (
							<Ionicons name="diamond-outline" size={size} color={color} />
						)
					}}
					redirect={authState?.role !== Role.USER}
				/>
				<Drawer.Screen
					name="music"
					
					options={{
						headerTitle: 'Music Videos',
						drawerLabel: 'Music',
						drawerIcon: ({ size, color }) => (
							<Ionicons name="musical-notes-outline" size={size} color={color} />
						)
					}}
					redirect={authState?.role !== Role.USER} 
				/>
				<Drawer.Screen
					name="marketplace"
					
					options={{
						headerTitle: 'Marketplace',
						drawerLabel: 'Market',
						drawerIcon: ({ size, color }) => (
							<Ionicons name="card-outline" size={size} color={color} />
						)
					}}
					redirect={authState?.role !== Role.USER}
				/>
				<Drawer.Screen
					name="leaderboard"
					
					options={{
						headerTitle: 'LeaderBoard',
						drawerLabel: 'Leader',
						drawerIcon: ({ size, color }) => (
							<Ionicons name="people-outline" size={size} color={color} />
						)
					}}
					redirect={authState?.role !== Role.USER}
				/><Drawer.Screen
				name="news"
				
				options={{
					headerTitle: 'Newsfeed',
					drawerLabel: 'News',
					drawerIcon: ({ size, color }) => (
						<Ionicons name="cog-outline" size={size} color={color} />
					)
				}}
				redirect={authState?.role !== Role.USER}
			   />
				<Drawer.Screen
					name="admin"
					options={{
						headerTitle: 'Admin Area',
						drawerLabel: 'Admin',
						drawerIcon: ({ size, color }) => (
							<Ionicons name="flash-outline" size={size} color={color} />
						)
					}}
					redirect={authState?.role !== Role.ADMIN}
				/>
			</Drawer>
		</GestureHandlerRootView>
	);
};

export default DrawerLayout;