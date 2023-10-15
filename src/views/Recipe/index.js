import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import RecipeLayout from '../../components/RecipeLayout';

// Tela receitas do APP
const RecipeScreen = () => {

    // Carregando Fonts
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
        <ScrollView>
            <SafeAreaView style={styles.RecipeScreenContainer}>
                <StatusBar style="auto" />
                <RecipeLayout />
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    RecipeScreenContainer: {
        padding: 32,
        backgroundColor: '#fff',
    },
});

export default RecipeScreen;