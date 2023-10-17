import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

import RecipeScreen from '../../../views/Recipe';
import DiscoverTabNavigator from '../../TabNavigator/discover';
import HomeScreen from '../../../views/Home';
// import RecipesDisplay from '../../../components/RecipesDisplay';
import RecipesDisplay from '../../../components/RecipesDisplay';
import { useState } from 'react';


const Stack = createNativeStackNavigator();

export const Aa = () => {
    return (
        <View>
            <Text>aaaaaaaa</Text>
        </View>
    )
}

const HomeStack = () => {

    const [route, setRoute] = useState("Home")

    return (
        <Stack.Navigator initialRouteName={route} screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Recipe" route={route} useRoute={setRoute} component={RecipeScreen} />
        </Stack.Navigator>
    );
};

export default HomeStack;