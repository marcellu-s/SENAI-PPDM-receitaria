import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import RecipeLayout from '../../components/RecipeLayout';
import Navbar from '../../components/Navbar';

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
        <View>
            <ScrollView>
                <SafeAreaView style={styles.RecipeScreenContainer}>
                    <StatusBar style="auto" />
                    <RecipeLayout />
                </SafeAreaView>
            </ScrollView>
            <Navbar />
        </View>
    );
}

const styles = StyleSheet.create({
    RecipeScreenContainer: {
        paddingVertical: 40,
        paddingHorizontal: 20,
        marginBottom: 40,
        backgroundColor: '#fff',
    },
});

export default RecipeScreen;