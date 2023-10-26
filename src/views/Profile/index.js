import { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { getUserData } from '../../services/api';
import { UserContext } from '../../contexts/UserContext';

export default function ProfileScreen() {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const { userData } = useContext(UserContext);

    useEffect(() => {

        async function getUser() {

            const data = await getUserData(userData.id);

            
            if (data.status === false) {
                
                alert(data.msg);
                
                return;
            }
            
            const user = data.user;

            setNome(user.name);
            setSobrenome(user.lastName);
            setEmail(user.email);
            setSenha(user.password);
        }

        getUser();


    }, []);

    function editar() {

        if (onPress = true) {
            alert('Dados alterados com sucesso!')
            return;
        }

    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ paddingVertical: 40, backgroundColor: "fff", paddingHorizontal: 20 }}>
                <View style={{flexDirection:'row', justifyContent: 'flex-end'}}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 17, fontFamily: 'Poppins-Bold'}}>Salvar</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontSize: 32, fontFamily: 'Poppins-Bold', textAlign: 'center', marginTop: 40 }}>Meu Perfil</Text>
                </View>
                <View style={{ marginTop: 10}}>
                    <Image style={{width:100 , height:100 , borderRadius: 100/2, marginLeft: 135 }} source={require('../../assets/images/transferir.png')}/>
                    <Text style={styles.subtitle}> {`${nome} ${sobrenome} `} </Text>
                </View>
                <View style={styles.inputWrapperDouble}>
                    <TextInput value={nome} style={styles.input} onChangeText={(value) => setNome(value)} placeholderTextColor={'#ffff'} placeholder='Nome' />
                    <TextInput value={sobrenome} style={styles.input} onChangeText={(value) => setSobrenome(value)} placeholderTextColor={'#ffff'} placeholder='Sobrenome' />
                </View>
                <View style={styles.inputWrapper}>
                    <View style={styles.inputContainer}>
                        <TextInput value={email} style={styles.input2} onChangeText={(value) => setEmail(value)} placeholderTextColor={'#ffff'} placeholder='Email' />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput value={senha} style={styles.input2} onChangeText={(value) => setSenha(value)} placeholderTextColor={'#ffff'} placeholder='Senha' />
                    </View>
                </View>
                <View style={{ marginVertical: 20, paddingVertical: 20 }}>
                    <TouchableOpacity style={styles.button} onPress={() => editar()}>
                        <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center', fontFamily: 'Poppins-Bold' }}>EDITAR</Text>
                    </TouchableOpacity>
                </View>
        </ScrollView>
        </SafeAreaView >
    );
}


const styles = StyleSheet.create({

    subtitle: {
        
        marginTop: 15,
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: 'Poppins-Light',
    },

    inputWrapper: {
        marginTop: 20,
        gap: 12
    },

    inputContainer: {
        gap: 4,

    },

    inputWrapperDouble: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,

    },

    input: {
        fontFamily: 'Poppins-Light',
        marginTop: 70,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#242A37',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 6,
        color: '#ffff',
        width: '45%',

    },

    input2: {
        fontFamily: 'Poppins-Light',
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#242A37',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 6,
        width: '100%',
        color: '#ffff',

    },

    inputContainerDouble: {
        flexGrow: 1
    },

    button: {
        width: '100%',
        backgroundColor: '#FE8A07',
        padding: 12,
        borderRadius: 8
    }

});
