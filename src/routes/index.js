import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import HomeScreen from '../views/Home';
import RecipeScreen from '../views/Recipe';
import LoginScreen from '../views/Login';
import RegisterScreen from '../views/Register';
import ProfileScreen from '../views/Profile';

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
            <Stack.Navigator initialRouteName='Profile' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Recipe" component={RecipeScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;