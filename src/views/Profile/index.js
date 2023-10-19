import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
// import ProfileScreen from './index';


export default function ProfileScreen() {

    const navigation = useNavigation();


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
                <View style={{flexDirection:'row', justifyContent: 'space-between', marginTop: 30, paddingHorizontal: 3}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Feather name="arrow-left-circle" size={32} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{  }}>
                        <Text style={{ fontSize: 18, fontWeight: 600}}>Salvar</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', paddingTop: 50 }}>Meu Perfil</Text>
                </View>
                <View style={{ marginTop: 40 }}>
                    {/* <Image source={require('./src/assets/images/transferir.png')}/> */}
                    <Image source={{uri:'https://i.pinimg.com/564x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg'}}/>
                    
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
        marginTop: 100,
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
