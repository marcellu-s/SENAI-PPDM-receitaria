import { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import RecipeStack from '../../StackNavigator/recipe';
import RecipesDisplay from '../../../components/RecipesDisplay';


const Tab = createMaterialTopTabNavigator();

const TabBar = ({ currentRoute, setRoute }) => {
    const navigation = useNavigation();

    const isTabActive = (tabName) => {
        return currentRoute === tabName;
    };

    return (
        <View style={styles.categoriesWrapper}>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Popular");
                setRoute("Popular");
            }}>
                <Text style={isTabActive("Popular") ? styles.categorieDestac : styles.categorie}>Popular</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate("New");
                setRoute("New");
            }}>
                <Text style={isTabActive("New") ? styles.categorieDestac : styles.categorie}>Novas receitas</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate("All");
                setRoute("All");
            }}>
                <Text style={isTabActive("All") ? styles.categorieDestac : styles.categorie}>Todas</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
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

const Aa = () => {
    return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
        <Text>aaaaaaaaa</Text>
    </View>
    )
}

const DiscoverTabNavigator = () => {
    const [route, setRoute] = useState("Popular");

    return (
        <Tab.Navigator initialRouteName={"Popular"} screenOptions={{ headerShown: false }} tabBar={(props) => <TabBar {...props} currentRoute={route} setRoute={setRoute} />}>
            <Tab.Screen name="Popular" component={RecipesDisplay} />
            <Tab.Screen name="New" component={RecipesDisplay} />
            <Tab.Screen name="All" component={RecipesDisplay} />
        </Tab.Navigator>
    );
}

export default DiscoverTabNavigator;