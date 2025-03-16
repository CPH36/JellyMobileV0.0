import { useRouter } from 'expo-router'
import { Button, StyleSheet, Text, View } from 'react-native';

const Page = () => {
    
    const router = useRouter()


    return (
        <View >
            <Text style={styles.title}>WELCOME JELLY MEMEBERS</Text>  
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