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
                lastName: data.lastName,
                email: data.email,
                id: data.id
            }
        }

        return {
            status: false,
            msg: "Opa, um erro aconteceu, mas não foi sua culpa, tente novamente"
        };

    } catch (err) {

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

    } catch (err) {

        console.log(err);

        return {
            status: false,
            msg: "Opa, um erro aconteceu, mas não foi sua culpa, tente novamente"
        };
    }
}

// Exibir todas as receitas
export async function getAllRecipes(userId) {

    try {

        const response = await fetch(`${baseURL}/recipe/all/${userId}`, {
            method: 'GET',
        });

        const data = await response.json();

        if (data.code === 200 && data.recipes) {

            return {
                status: true,
                recipes: data.recipes
            };
        } else {

            if (data.code === 200) {

                return {
                    status: true,
                    msg: data.msg
                };
            }

            return {
                status: false,
                msg: "Opa, um erro aconteceu ao carregar as receitas!"
            };
        }

    } catch (err) {

        console.log(err);

        return {
            status: false,
            msg: "Opa, um erro aconteceu ao carregar as receitas!"
        };
    }
}

// Exbir as receitas favoritas
export async function getMyFavRecipes(userId) {

    try {

        const tokenData = await getToken();

        if (tokenData.status === false) {

            return {
                status: false,
                msg: 'Falha na autenticação, tente logar novamente!'
            };
        }

        const response = await fetch(`${baseURL}/recipe/user/favorite/${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${tokenData.token}`,
            },
        });

        const data = await response.json();

        if (data.code === 200 && data.recipes) {

            return {
                status: true,
                recipes: data.recipes
            };
        } else {

            if (data.code === 200) {

                return {
                    status: true,
                    msg: data.msg
                };
            }

            return {
                status: false,
                msg: "Opa, um erro aconteceu ao carregar as receitas!"
            };
        }

    } catch (err) {

        console.log(err);

        return {
            status: false,
            msg: "Opa, um erro aconteceu ao carregar as receitas!"
        };
    }
}

// Exibir minhas receitas criadas
export async function getMyRecipes(userId) {

    try {

        const tokenData = await getToken();

        if (tokenData.status === false) {

            return {
                status: false,
                msg: 'Falha na autenticação, tente logar novamente!'
            };
        }

        const response = await fetch(`${baseURL}/recipe/user/${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${tokenData.token}`,
            },
        });

        const data = await response.json();

        if (data.code === 200 && data.recipes) {

            return {
                status: true,
                recipes: data.recipes
            };
        } else {

            if (data.code === 200) {

                return {
                    status: true,
                    msg: data.msg
                };
            }

            return {
                status: false,
                msg: "Opa, um erro aconteceu ao carregar as receitas!"
            };
        }

    } catch (err) {

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

        const tokenData = await getToken();

        if (tokenData.status === false) {

            return {
                status: false,
                msg: 'Falha na autenticação, tente logar novamente!'
            };
        }

        const response = await fetch(`${baseURL}/user/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${tokenData.token}`,
            },
        });

        const data = await response.json();

        if (data.status === 'success') {

            return data;
        } else {

            return {
                status: false,
                msg: data.msg
            }
        }
    } catch (err) {

        console.log(err);

        return {
            status: false,
            msg: 'Falha na autenticação, tente logar novamente!'
        };
    }
}

export async function postRecipe(title,about,author,image,duration,difficult,portion,additionalInformation,ingredients,methodPreparation,categories,creatorID) {

    try {
        
        const tokenData = await getToken();

        const payload = {
            title,
            about,
            author,
            image,
            duration,
            difficult,
            portion,
            additionalInformation,
            ingredients,
            methodPreparation,
            categories,
            creatorID
        }

        const response = await fetch(`${baseURL}/recipe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenData.token}`
            },
            body: JSON.stringify(payload)
        });
        
        const data = await response.json();

        return {
            msg: data.msg
        };

    } catch (err) {

        console.log(err)

        return {
            msg: err
        };
    }
}

export async function setFavRecipe(userId, recipeId) {

    // Verificando se existem dados
    if (!userId || !recipeId) {

        return {
            status: false,
            msg: "Opa, um erro aconteceu ao realizar essa ação!"
        };
    }

    try {

        const payload = {
            userId,
            recipeId
        }

        const tokenData = await getToken();

        const response = await fetch(`${baseURL}/recipe/favorite`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenData.token}`,
            },
            body: JSON.stringify(payload)
        })

        const data = await response.json();

        if (data.code != 200) {

            return {
                status: false,
                msg: data.msg
            };
        }

        return {
            status: true,
            msg: data.msg
        }

    } catch (err) {

        console.log(err);

        return {
            status: false,
            msg: "Opa, um erro aconteceu ao realizar essa ação!"
        };
    }
}

export async function editUser(userId, name, lastName, email, oldPassword, newPassword) {

    try {

        const tokenData = await getToken();

        const payload = {
            userId,
            name,
            lastName,
            email,
            newPassword,
            oldPassword
        }

        const response = await fetch(`${baseURL}/user`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenData.token}`,
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (data.code == 200) {

            return {
                status: true,
                msg: data.msg
            }
        } else {

            return {
                status: false,
                msg: data.msg
            }
        }
    } catch(err) {

        return {
            status: false,
            msg: "Erro ao tentar editar o usuário! Tente novamente em instantes."
        }
    }
}
