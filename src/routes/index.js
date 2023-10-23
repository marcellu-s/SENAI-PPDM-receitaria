import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import RecipeScreen from '../views/Recipe';
import LoginScreen from '../views/Login';
import RegisterScreen from '../views/Register';
import CadastroReceita from '../views/CadastroReceita';

import TabNavigator from './TabNavigator';
import { UserProvider } from '../contexts/UserContext';

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
        <UserProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                    <Stack.Screen name="Home" component={TabNavigator} />
                    <Stack.Screen name="Recipe" component={RecipeScreen} />
                    <Stack.Screen name="CadastroReceita" component={CadastroReceita} />
                </Stack.Navigator>
            </NavigationContainer>
        </UserProvider>
    );
};

export default Routes;