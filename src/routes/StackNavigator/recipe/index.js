import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

import RecipeScreen from '../../../views/Recipe';
// import RecipesDisplay from '../../../components/RecipesDisplay';
import RecipesDisplay from '../../../components/RecipesDisplay';


const Stack = createNativeStackNavigator();

const Aa = () => {
    return (
        <View>
            <Text>aaaaaaaa</Text>
        </View>
    )
}

const RecipeStack = () => {

    return (
        <Stack.Navigator initialRouteName="Kk" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Kk" component={Aa} />
            <Stack.Screen name="Recipe" component={RecipeScreen} />
        </Stack.Navigator>
    );
};

export default RecipeStack;