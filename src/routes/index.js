import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import RecipeScreen from '../views/Recipe';
import LoginScreen from '../views/Login';
import RegisterScreen from '../views/Register';

import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const Routes = () => {

    const [fontsLoaded] = useFonts({
        'Poppins-Light': require('../assets/fonts/Poppins/Poppins-Light.ttf'),
        'Poppins-Regular': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Home" component={TabNavigator} />
                <Stack.Screen name="Recipe" component={RecipeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;