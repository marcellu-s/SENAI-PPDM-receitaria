import { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons//MaterialCommunityIcons';

import { getToken } from '../../services/verifications';

import HomeScreen from '../../views/Home';
import ProfileScreen from '../../views/Profile'
import FavoritesScreen from '../../views/Favorites';
import MyRecipesScreen from '../../views/MyRecipes';

const Tab = createBottomTabNavigator();

const TabBar = ({ currentRoute, setRoute }) => {
    const navigation = useNavigation();

    const isTabActive = (tabName) => {
        return currentRoute === tabName;
    };

    return (
        <View style={styles.navbar}>
            <TouchableOpacity style={ isTabActive("MyHome") ? {borderRadius: 50, padding: 5, backgroundColor: "#fff2"} : {padding: 5}} onPress={() => {
                navigation.navigate('MyHome');
                setRoute('MyHome');
            }}>
                <Icon name="home" size={26} color={isTabActive("MyHome") ? "#fff" : "#999"} /> 
            </TouchableOpacity>
            <TouchableOpacity style={ isTabActive("Favorites") ? {borderRadius: 50, padding: 5, backgroundColor: "#fff2"} : {padding: 5}} onPress={() => {
                navigation.navigate('Favorites');
                setRoute('Favorites');
            }}>
                <Icon name={isTabActive("Favorites") ? "heart" : "heart-outline"} size={26} color={isTabActive("Favorites") ? "#fff" : "#999"} />
            </TouchableOpacity>
            <TouchableOpacity style={{borderRadius: 50, padding: 5, backgroundColor: isTabActive("AddRecipe") ? "#FE8A07" : "#fff2"}} onPress={() => {
                navigation.navigate('AddRecipe');
                setRoute('AddRecipe');
            }}>
                <Icon name="plus" size={32} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={ isTabActive("Profile") ? {borderRadius: 50, padding: 5, backgroundColor: "#fff2"} : {padding: 5}} onPress={async () => {

                if ((await getToken()).status === true) {

                    navigation.navigate('Profile')
                    setRoute('Profile');
                } else {

                    alert("Falha de autenticação, tente logar novamente!");
                    navigation.navigate('MyHome');
                }
            }}>
                <Icon name="account-circle" size={26} color={isTabActive("Profile") ? "#fff" : "#999"} />
            </TouchableOpacity>
            <TouchableOpacity style={ isTabActive("Settings") ? {borderRadius: 50, padding: 5, backgroundColor: "#fff2"} : {padding: 5}} onPress={() => {
                navigation.navigate('MyRecipes');
                setRoute('MyRecipes');
            }}>
                <Icon name="book" size={26} color={isTabActive("MyRecipes") ? "#fff" : "#999"} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#242A37',
        paddingHorizontal: 32,
        paddingVertical: 8,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        width: Dimensions.get('window').width - 40,
        position: 'absolute',
        bottom: 16,
        alignSelf: 'center',
    }
});


const TabNavigator = () => {
    const [route, setRoute] = useState("MyHome");

    return (
        <Tab.Navigator initialRouteName={route} screenOptions={{ headerShown: false }} tabBar={(props) => <TabBar {...props} currentRoute={route} setRoute={setRoute} />}>
            <Tab.Screen name="MyHome" component={HomeScreen} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} />
            <Tab.Screen name="AddRecipe" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="MyRecipes" component={MyRecipesScreen} />
        </Tab.Navigator>
    );
}

export default TabNavigator;