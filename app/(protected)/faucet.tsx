import { useRouter} from 'expo-router';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const Page = () => {
	
    const router = useRouter()
	var userdata
	
	const [ User, setUser] = useState(null);
	useEffect(() =>  {
		 const getLoggedInUser = async () => {
			
			const { data: { user } } = await supabase.auth.getUser();
			
			
			userdata = JSON.stringify(user)
		  };
		  getLoggedInUser()
	  });
	 [];
  
	const doLogout = async () => {
	  const {error} = await supabase.auth.signOut();
	  if (error) {
		Alert.alert("Error Signing Out User", error.message);
	  }
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Faucet</Text>
			<Text style={styles.title}>Role: </Text>
			<Button title="Logout" onPress={doLogout} />
			<View style={styles.separator} />

			<Text>{userdata}
			</Text>
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