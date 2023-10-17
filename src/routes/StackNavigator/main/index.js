import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import TabNavigator from '../../TabNavigator/main';

import LoginScreen from '../../../views/Login';
import RegisterScreen from '../../../views/Register';

const Stack = createNativeStackNavigator();

const Routes = () => {

    const [fontsLoaded] = useFonts({
        'Poppins-Light': require('../../../assets/fonts/Poppins/Poppins-Light.ttf'),
        'Poppins-Regular': require('../../../assets/fonts/Poppins/Poppins-Regular.ttf'),
        'Poppins-Bold': require('../../../assets/fonts/Poppins/Poppins-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Main" component={TabNavigator} />
        </Stack.Navigator>
    );
};

export default Routes;