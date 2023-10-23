import AsyncStorage from '@react-native-async-storage/async-storage';

import { getToken, verifyEmail } from './verifications';

const baseURL = "https://receitaria-api.vercel.app";

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
        const payload = {
            email,
            password
        }

        // Realizando a requisição
        const response = await fetch(`${baseURL}/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        // Recebendo a responsta
        const data = await response.json();

        // Caso a resposta seja de erro
        if (data.status === "error") {

            return {
                status: false,
                msg: data.msg
            };
        }

        // Guardando o Token para futuras requisições
        await AsyncStorage.setItem('token', data.token);

        if ((await AsyncStorage.getItem('token'))) {

            return {
                status: true,
                msg: "Log In efetuado com sucesso!",
                name: data.name,
                email: data.email,
                id: data.id
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

// Cadastrar-se no app
export async function registerCall({ name, lastName, email, password }) {

    // Verificando se existem dados
    if (!name || !lastName || !email || !password) {

        return {
            status: false,
            msg: "Todos os campos são obrigatórios"
        };
    }

    // Validações
    if (verifyEmail(email).status === false) {

        return {
            status: false,
            msg: "Informe um e-mail válido"
        };
    }
    
    // Realizando a requisição
    try {

        const payload = {
            name,
            lastName,
            email,
            password
        }

        const response = await fetch(`${baseURL}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        // Recebendo a responsta
        const data = await response.json();

        // Caso a resposta seja de erro
        if (data.status === "error") {

            return {
                status: false,
                msg: data.msg
            };
        }

        if (data.status === "success") {

            return {
                status: true,
                msg: data.msg
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

// Exibir todas as receitas

export async function getAllRecipes() {

    try {

        const response = await fetch(`${baseURL}/recipe/all`, {
            method: 'GET'
        });

        const data = await response.json();

        if (data.code === 200) {

            return {
                status: true,
                recipes: data.recipes
            };
        } else {

            return {
                status: false,
                msg: "Opa, um erro aconteceu ao carregar as receitas!"
            };
        }

    } catch(err) {

        console.log(err);

        return {
            status: false,
            msg: "Opa, um erro aconteceu ao carregar as receitas!"
        };
    }
}

// Pegar os dados do usuário
export async function getUserData(id) {

    try {

        const token = await getToken();

        if (token.status === false) {

            return false;
        }

        const response = await fetch(`${baseURL}/user/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            } 
        });

        const data = response.json();

        console.log(data);
        
    } catch(err) {

        console.log(err);

        return {
            status: false,
            msg: "Opa, um erro aconteceu ao buscar seu perfil!"
        };
    }
}