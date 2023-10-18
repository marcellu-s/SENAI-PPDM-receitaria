import { Alert } from "react-native";
import { Logout } from "../../services/logout";
import { useNavigation } from "@react-navigation/native";

export const showConfirmLogoutDialog = (navigation) => {

    return Alert.alert(
        "Você tem certeza?",
        "Você tem certeza que quer sair da sua conta?",
        [
            // The "Yes" button
            {
                text: "Sim",
                onPress: async () => {
                    if ((await Logout()).status === true) {

                        navigation.navigate('Login');
                    }
                },
            },
            // The "No" button
            // Does nothing but dismiss the dialog when tapped
            {
                text: "Não",
            },
        ]
    );
};