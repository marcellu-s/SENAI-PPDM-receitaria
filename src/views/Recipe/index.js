import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';

import RecipeLayout from '../../components/RecipeLayout';

// Tela receitas do APP
const RecipeScreen = () => {

    return (
        <View>
            <ScrollView>
                <SafeAreaView style={styles.RecipeScreenContainer}>
                    <StatusBar style="dark" />
                    <RecipeLayout />
                </SafeAreaView>
            </ScrollView>
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