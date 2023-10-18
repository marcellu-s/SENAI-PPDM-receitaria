import AsyncStorage from "@react-native-async-storage/async-storage"

export async function Logout() {

    try {

        await AsyncStorage.removeItem('token');

        return {
            status: true
        }
        
    } catch(err) {

        return {
            status: false
        }
    }
}
