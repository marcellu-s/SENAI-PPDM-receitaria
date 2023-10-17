import { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import TabNavigator from '../TabNavigator';

const Drawer = createDrawerNavigator();

const TabNavigator = () => {
    const [route, setRoute] = useState("Home");

    return (
        <Drawer.Navigator initialRouteName={route} screenOptions={{ headerShown: false }} DrawerBar={(props) => <DrawerBar {...props} currentRoute={route} setRoute={setRoute} />}>
            <Drawer.Screen name="Home" component={TabNavigator} />
        </Drawer.Navigator>
    );
}

export default TabNavigator;