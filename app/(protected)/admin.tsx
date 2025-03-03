import { useRouter} from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuth, Role } from '../../context/AuthContext';
import WithRole from '../../components/WithRole';

const Page = () => {
	const { authState, onLogout } = useAuth();
    const router = useRouter()
	const onLogoutPressed = () => {
		onLogout!();
        router.replace("../../login")
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Admin</Text>
			<Text style={styles.title}>Role: {authState?.role}</Text>
			<Button title="Logout" onPress={onLogoutPressed} />
			<View style={styles.separator} />

			<WithRole role={Role.ADMIN}>
				<Text>Only visible for admins</Text>
			</WithRole>

			<WithRole role={Role.USER}>
				<Text>Only visible for users</Text>
			</WithRole>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center'
	},
	separator: {
		height: 1,
		marginVertical: 30,
		width: '80%'
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold'
	}
});


export default Page;