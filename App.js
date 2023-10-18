import { useEffect } from 'react';
import * as Font from 'expo-font';
import Routes from './src/routes';

export default function App() {

    async function loadFonts() {

        await Font.loadAsync({
            'Poppins-Light': require('./src/assets/fonts/Poppins/Poppins-Light.ttf'),
            'Poppins-Regular': require('./src/assets/fonts/Poppins/Poppins-Regular.ttf'),
            'Poppins-Bold': require('./src/assets/fonts/Poppins/Poppins-Bold.ttf'),
        });
    }

    useEffect(() => {
        
        loadFonts();

    }, []);

    return (
        <Routes />
    );
}
