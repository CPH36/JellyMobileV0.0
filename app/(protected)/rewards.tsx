import { useRouter } from 'expo-router'
import { Button, StyleSheet, Text, View , Alert} from 'react-native';

import { supabase } from '../lib/supabase';

const Page = () => {
	
    const router = useRouter()
	const doLogout = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			Alert.alert("error Siging out user")
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Rewards</Text>
			
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