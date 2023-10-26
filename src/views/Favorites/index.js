import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';

import RecipesDisplay from '../../components/RecipesDisplay';

import { Ionicons, AntDesign  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { showConfirmLogoutDialog } from '../../components/Confirm';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const Header = () => {

    const { userData } = useContext(UserContext);

    const navigation = useNavigation();

    return (
        <View style={stylesHeader.headerContainer}>
            <View style={stylesHeader.header}>

                <Text style={stylesHeader.title}>Bem vindo(a){userData.name ? `, ${userData.name}` : ''}</Text>
                <TouchableOpacity onPress={() => showConfirmLogoutDialog(navigation)}>
                    <Ionicons name="exit-outline" size={32} color="black" />
                </TouchableOpacity>
            </View>

            <Text style={stylesHeader.headlineText}>Veja suas receitas salvas!</Text>

            <View style={stylesHeader.inputSearch}>
                <TextInput style={stylesHeader.input} placeholder={'Procure uma receita'} placeholderTextColor={'#fff'} />
                <TouchableOpacity style={stylesHeader.searchIcon}>
                    <AntDesign name="search1" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};


const stylesHeader = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        fontSize: 24,
        color: '#333',
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
    },

    headlineText: {
        marginTop: 64,
        fontSize: 32,
        fontFamily: 'Poppins-Bold',
        color: '#333',
    },

    inputSearch: {
        position: 'relative',
        marginTop: 32,
    },

    input: {
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        backgroundColor: '#242A37',
        color: '#fff',
    },

    searchIcon: {
        position: 'absolute',
        right: 16,
        top: 10,
    },

    categoriesWrapper: {
        marginTop: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    categorieDestac: {
        backgroundColor: '#FE8A07',
        color: '#fff',
        fontFamily: 'Poppins-Bold',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 8,
        textAlign: 'center',
        verticalAlign: 'middle',
    },  

    categorie: {
        backgroundColor: '#fff',
        color: '#333',
        fontFamily: 'Poppins-Regular',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#999',
        textAlign: 'center',
        verticalAlign: 'middle',
    }
});

const FavoritesScreen = () => {

    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <ScrollView >
                <SafeAreaView style={styles.homeScreenContainer}>
                    <StatusBar style="auto" />
                    <Header />
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

export default FavoritesScreen;