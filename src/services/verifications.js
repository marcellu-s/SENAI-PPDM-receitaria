// Funções de validações

import AsyncStorage from "@react-native-async-storage/async-storage";

// Verificar o email
export function verifyEmail(email) {

    let emailTrim = email.replace(/@.*/gm, "");
    let match = emailTrim.match(/[\d\w._#$&]/gm);

    if (match && (match.length === emailTrim.length)) {

        return {
            status: true,
            email: emailTrim
        };
        
    } else {

        return {
            status: false,
        };
    }
}

export async function getToken() {

    const token = await AsyncStorage.getItem('token');

    if (token && token.length > 0) {

        return {
            status: true,
            token: token
        };
    } else {

        return {
            status: false
        };
    }
}

export async function getUserDataInAsyncStorage() {

    try {

        const data = await AsyncStorage.getItem('userData');

        if (data) {

            return data;
        }

        return false;

    } catch(err) {

        return false;
    }
}