import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

import RecipeScreen from '../../../views/Recipe';
import DiscoverTabNavigator from '../../TabNavigator/discover';
// import RecipesDisplay from '../../../components/RecipesDisplay';
import RecipesDisplay from '../../../components/RecipesDisplay';


const Stack = createNativeStackNavigator();

export const Aa = () => {
    return (
        <View>
            <Text>aaaaaaaa</Text>
        </View>
    )
}

const RecipeStack = () => {

    return (
        <Stack.Navigator initialRouteName="Kk" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Kk" component={RecipesDisplay} />
            <Stack.Screen name="Recipe" component={RecipeScreen} />
        </Stack.Navigator>
    );
};

export default RecipeStack;