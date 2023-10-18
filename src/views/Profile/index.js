import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView, } from 'react-native';
import { Feather } from '@expo/vector-icons';


export default function ProfileScreen() {


    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function editar() {
        if (onPress = true) {
            alert('Dados alterados com sucesso!')
            return;
        }

    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ padding: 20 }}>
                <View>
                    <TouchableOpacity style={{ fontSize: 18, fontWeight: 'bold', paddingTop: 20 }}>
                        <Feather name="arrow-left-circle" size={34} color="black" />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{ fontSize: 18, fontWeight: 'bold', paddingTop: 20 }}>
                        <Text>Salvar</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', paddingTop: 100 }}>Meu perfil</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.subtitle}>Imagem do perfil</Text>
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
                    <Text style={{ fontSize: 24, color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>EDITAR</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        </SafeAreaView >
    );
}


const styles = StyleSheet.create({

    subtitle: {
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center'
    },

    inputWrapper: {
        marginTop: 55,
        gap: 12
    },

    inputContainer: {
        gap: 6,

    },

    inputWrapperDouble: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,

    },

    input: {

        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#242A37',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 6,





    },

    input2: {

        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#242A37',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginRight: 200,
        width: '100%'


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
