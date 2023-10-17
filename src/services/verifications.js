// Funções de validações

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