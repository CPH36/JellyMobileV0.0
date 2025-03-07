import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';

const Page = () => {
    return (
        <ImageBackground source={require('../../assets/jelly_Sweatshirt.png')} style={styles.background}>
            <View style={styles.overlay}>
                <View style={styles.content}>
                    <Text style={styles.title}>Official JellyFC Martketplace</Text>
                </View>
                <TouchableOpacity style={styles.comingSoonButton}>
                    <Text style={styles.comingSoonText}>Coming Soon!</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover', 
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
        alignItems: 'center',
        justifyContent: 'space-between', 
        width: '100%',
        height: '100%',
        paddingBottom: 20, 
    },
    content: {
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontFamily: "monospace",
        fontWeight: 'bold',
        color: '#76d7c4', 
        textAlign: 'center',
        marginTop: 50,
    },
    comingSoonButton: {
        backgroundColor: '#00CCFF', 
        paddingVertical: 15,
        paddingHorizontal: 60,
        borderRadius: 30,
        elevation: 10, 
        shadowColor: 'gold',  
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 5.0,
        shadowRadius: 10,
    },
    comingSoonText: {
        color: 'black',
        fontFamily: "monospace",
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default Page;
