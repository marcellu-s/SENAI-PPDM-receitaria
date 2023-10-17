import { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import RecipeStack from '../../StackNavigator/recipe';
import HomeScreen from '../../../views/Home';
import DiscoverTabNavigator from '../discover';

// import SettingsScreen from '../../views/Settings';
// import HomeScreen from '../../views/Home';
// import RecipeScreen from '../../views/Recipe';

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
                <Icon name="home" size={26} color={isTabActive("MyHome") ? "#fff" : "#fff2"} /> 
            </TouchableOpacity>
            <TouchableOpacity style={ isTabActive("Favorites") ? {borderRadius: 50, padding: 5, backgroundColor: "#fff2"} : {padding: 5}} onPress={() => {
                navigation.navigate('Favorites');
                setRoute('Favorites');
            }}>
                <Icon name={isTabActive("Favorites") ? "heart" : "heart-outline"} size={26} color={isTabActive("Favorites") ? "#fff" : "#fff2"} />
            </TouchableOpacity>
            <TouchableOpacity style={{borderRadius: 50, padding: 5, backgroundColor: isTabActive("More") ? "#FE8A07" : "#fff2"}} onPress={() => {
                navigation.navigate('More');
                setRoute('More');
            }}>
                <Icon name="plus" size={32} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={ isTabActive("Profile") ? {borderRadius: 50, padding: 5, backgroundColor: "#fff2"} : {padding: 5}} onPress={() => {
                navigation.navigate('Profile');
                setRoute('Profile');
            }}>
                <Icon name="account-circle" size={26} color={isTabActive("Profile") ? "#fff" : "#fff2"} />
            </TouchableOpacity>
            <TouchableOpacity style={ isTabActive("Settings") ? {borderRadius: 50, padding: 5, backgroundColor: "#fff2"} : {padding: 5}} onPress={() => {
                navigation.navigate('Settings');
                setRoute('Settings');
            }}>
                <Icon name="cog" size={26} color={isTabActive("Settings") ? "#fff" : "#fff2"} />
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

        width: Dimensions.get('window').width - 64,
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
            <Tab.Screen name="Favorites" component={HomeScreen} />
            <Tab.Screen name="More" component={HomeScreen} />
            <Tab.Screen name="Profile" component={HomeScreen} />
            <Tab.Screen name="Settings" component={HomeScreen} />
        </Tab.Navigator>
    );
}

export default TabNavigator;