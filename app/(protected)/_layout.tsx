import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

import CustomDrawerContent from '~/components/CustomDrawerContent';




const DrawerLayout = () => {
	

	return (
		
			<Drawer
			screenOptions={{
				drawerLabelStyle: {
					//marginLeft: -20
				},
				// drawerActiveBackgroundColor: 'gray',
				// drawerActiveTintColor: 'white',
				// drawerInactiveTintColor: 'white'
			}}
			drawerContent={CustomDrawerContent}
			
		>
				<Drawer.Screen
					name="home"
					options={{
						headerTitle: 'Home',
						drawerLabel: 'Home',
						drawerIcon: ({ size, color }) => (
							<Ionicons name="home-outline" size={size} color={color}   />
						)
					}}
					
					
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
				/><Drawer.Screen
				name="news"
				
				options={{
					headerTitle: 'Newsfeed',
					drawerLabel: 'News',
					drawerIcon: ({ size, color }) => (
						<Ionicons name="cog-outline" size={size} color={color} />
					)
				}}
			   />
			   
				
					
				
				
			</Drawer>
			
		
	);
};

export default DrawerLayout;