// Funções de validações

import AsyncStorage from "@react-native-async-storage/async-storage";

export function isRegiserValid(name, lastName, email, password, confirmPassword) {

    if (name && lastName && email && password && confirmPassword) {

        if (password.length < 8) {

            return {
                status: false,
                msg: "A senha deve ter no mínimo 8 caracteres!"
            }
        }

        if (password == confirmPassword) {

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/gm;

            if (emailRegex.test(email)) {

                return {
                    status: true
                }
            }

            return {
                status: false,
                msg: "Informe um e-mail válido!"
            }
        }

        return {
            status: false,
            msg: "As senhas não conferem! Verifique e tente novamente"
        }
    }

    return {
        status: false,
        msg: "Dados estão faltando! Verifique e tente novamente"
    }
}

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