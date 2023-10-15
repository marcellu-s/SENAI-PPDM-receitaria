import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import HeaderApp from '../../components/Header';
import RecipesDisplay from '../../components/RecipesDisplay';
import Navbar from '../../components/Navbar';

// Tela principal do APP
const HomeScreen = () => {

    const [fontsLoaded] = useFonts({
        'Poppins-Light': require('../../assets/fonts/Poppins/Poppins-Light.ttf'),
        'Poppins-Regular': require('../../assets/fonts/Poppins/Poppins-Regular.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins/Poppins-Bold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
        await SplashScreen.hideAsync();
    }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View>
            <ScrollView>
                <SafeAreaView style={styles.homeScreenContainer}>
                    <StatusBar style="auto" />
                    <HeaderApp />
                    <RecipesDisplay />
                </SafeAreaView>
            </ScrollView>
            <Navbar />
        </View>
    );
}

const styles = StyleSheet.create({
    homeScreenContainer: {
        padding: 32,
        backgroundColor: '#fff',
    },
});

export default HomeScreen;