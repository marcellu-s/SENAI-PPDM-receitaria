import { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Image, ActivityIndicator } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getUserData, editUser } from '../../services/api';
import { getUserDataInAsyncStorage } from '../../services/verifications';
import { UserContext } from '../../contexts/UserContext';

import profilePic from '../../assets/images/transferir.png'

export default function ProfileScreen() {

    const [ name, setName ] = useState('');
    const [ lastName, setLastName] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ hidePass, setHidePass ] = useState(true);
    const [ hideConfirmPass, setHideConfirmPass ] = useState(true);
    const [ isEdit, setIsEdit ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);

    const { userData, setUser } = useContext(UserContext);

    useEffect(() => {

        async function getUser() {

            setIsLoading(true);
    
            const data = await getUserData(userData.id);
            
            if (data.status === false) {
                
                alert(data.msg);
    
            } else {
    
                const user = data.user;
    
                setName(user.name);
                setLastName(user.lastName);
                setEmail(user.email);
            }
            
            setIsLoading(false)
        }

        getUser();

    }, []);

    async function editar() {

        setIsLoading(true)

        const result = await editUser(
            userData.id,
            name,
            lastName,
            email,
            password,
            confirmPassword
        )

        if (result.status) {
            
            // Troca os dados no LocalStorage
            await AsyncStorage.setItem('userData', JSON.stringify({
                name: name,
                lastName: lastName,
                email: email,
                id: userData.id
            }));
            // Troca os dados no Contexto
            setUser(JSON.parse(await getUserDataInAsyncStorage()));

            setPassword('');
            setConfirmPassword('')
            setHidePass(true);
            setHideConfirmPass(true);
            setIsEdit(false);
        }
        
        setIsLoading(false);

        alert(result.msg);
    }

    if (isLoading) {

        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#FE8A07" />
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16 }}>AGUARDE...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView style={styles.scrollViewContent}>
                <View style={{paddingVertical: 40}}>
                    <View style={{ flexDirection: 'row', marginBottom: 24, justifyContent: isEdit ? 'space-between' : 'flex-start' }}>
                        <TouchableOpacity onPress={() => setIsEdit(!isEdit)}>
                            <Text style={styles.options}>{isEdit ? 'Cancelar' : 'Editar'}</Text>
                        </TouchableOpacity>
                        {
                            isEdit &&
                            <TouchableOpacity onPress={() => editar()}>
                                <Text style={styles.options}>Salvar</Text>
                            </TouchableOpacity>
                        }
                    </View>
                    <View style={{alignItems: 'center', gap: 12}}>
                        <Image style={{width: 150, height: 150, borderRadius: 100}} source={profilePic} />
                        <Text style={styles.splashName}>{`${userData.name} ${userData.lastName}`}</Text>
                    </View>
                    <View>
                        <View style={{flexDirection: 'row', gap: 16, marginTop: 32}}>
                            <TextInput style={styles.inputSearchDouble} editable={isEdit} placeholder="Nome" value={name} autoCapitalize='none' keyboardType='default' placeholderTextColor={'#fff'} onChangeText={(value) => setName(value)} />
                            <TextInput style={styles.inputSearchDouble} editable={isEdit} placeholder="Sobrenome" value={lastName} autoCapitalize='none' keyboardType='default' placeholderTextColor={'#fff'} onChangeText={(value) => setLastName(value)} />
                        </View>
                        <View style={styles.inputSearch}>
                            <TextInput style={styles.input} editable={isEdit} placeholder="E-mail" value={email} autoCapitalize='none' keyboardType='email-address' placeholderTextColor={'#fff'} onChangeText={(value) => setEmail(value)} />
                        </View>
                        {
                            isEdit &&
                            <View>
                                <View style={styles.inputSearch}>
                                    <TextInput style={styles.input} placeholder="Senha antiga" value={password} autoCapitalize='none' secureTextEntry={hidePass} placeholderTextColor={'#fff'} onChangeText={(value) => setPassword(value)} />
                                    <TouchableOpacity style={styles.searchIcon} onPress={() => setHidePass(!hidePass)}>
                                        {
                                            hidePass ? <Feather name="eye-off" size={24} color="white" /> : <AntDesign name="eye" size={24} color="white" />
                                        }
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.inputSearch}>
                                    <TextInput style={styles.input} placeholder="Nova senha" value={confirmPassword} autoCapitalize='none' secureTextEntry={hideConfirmPass} placeholderTextColor={'#fff'} onChangeText={(value) => setConfirmPassword(value)} />
                                    <TouchableOpacity style={styles.searchIcon} onPress={() => setHideConfirmPass(!hideConfirmPass)}>
                                        {
                                            hideConfirmPass ? <Feather name="eye-off" size={24} color="white" /> : <AntDesign name="eye" size={24} color="white" />
                                        }
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({

    homeScreenContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },

    scrollViewContent: {
        paddingHorizontal: 20,
    },

    splashName: {
        fontSize: 24,
        fontFamily: 'Poppins-Bold',
        textTransform: 'capitalize'
    },

    inputSearch: {
        position: 'relative',
        marginTop: 32,
    },

    inputSearchDouble: {
        flex: 1,
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        backgroundColor: '#242A37',
        color: '#fff',
    },

    input: {
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        backgroundColor: '#242A37',
        color: '#fff',
    },

    searchIcon: {
        position: 'absolute',
        right: 16,
        top: 10,
    },

    options: {
        fontFamily: "Poppins-Bold",
        fontSize: 16,
        color: '#333',
    }

});
