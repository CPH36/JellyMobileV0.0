import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const Page = () => {
	return (
		<View style={styles.container}>
			<WebView 
				source={{ uri: 'https://www.jellyfc.com/' }} 
				style={styles.webview}
				javaScriptEnabled={true}
				domStorageEnabled={true}
				startInLoadingState={true}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#121212", // Dark mode background
	},
	webview: {
		flex: 1,
	},
});

export default Page;
