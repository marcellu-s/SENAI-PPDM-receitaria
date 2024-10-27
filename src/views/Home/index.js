import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';

import HeaderApp from '../../components/Header';
import RecipesDisplay from '../../components/RecipesDisplay';

// Tela principal do APP
const HomeScreen = () => {

    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <ScrollView >
                <SafeAreaView style={styles.homeScreenContainer}>
                    <StatusBar style="dark" />
                    <HeaderApp />
                    <RecipesDisplay />
                </SafeAreaView>
            </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
    homeScreenContainer: {
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 20,
        marginBottom: 40,
        backgroundColor: '#fff',
    },
});

export default HomeScreen;