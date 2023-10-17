import AsyncStorage from '@react-native-async-storage/async-storage';

import { verifyEmail } from './verifications';

// Efetuar login no app
export async function loginCall(email, password) {

    if (!email || !password) {

        return {
            status: false,
            msg: "Preencha os campos de e-mail e senha antes de entrar!"
        };
    }

    if (verifyEmail(email).status === false) {

        return {
            status: false,
            msg: "Informe um e-mail válido"
        };
    }

    try {

        // Definindo o body da requisição
        const bodyData = {
            email,
            password
        }

        // Realizando a requisição
        const request = await fetch("https://receitaria-api.vercel.app/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyData)
        });

        // Recebendo a responsta
        const response = await request.json();

        // Caso a resposta seja de erro
        if (response.status === "error") {

            return {
                status: false,
                msg: response.msg
            };
        }

        // Guardando o Token para futuras requisições
        await AsyncStorage.setItem('token', response.token);

        if ((await AsyncStorage.getItem('token')) != "") {

            return {
                status: true,
                msg: "Log In efetuado com sucesso!"
            }
        }

        return {
            status: false,
            msg: "Opa, um erro aconteceu, mas não foi sua culpa, tente novamente"
        };

    } catch(err) {

        console.log(err);

        return {
            status: false,
            msg: "Opa, um erro aconteceu, mas não foi sua culpa, tente novamente"
        };
    }
}
