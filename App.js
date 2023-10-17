import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/StackNavigator/main';

export default function App() {

    return (
        <NavigationContainer>      
            <Routes />
        </NavigationContainer>
    );
}
