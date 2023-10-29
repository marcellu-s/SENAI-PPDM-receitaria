import { StatusBar } from 'expo-status-bar';
import { AntDesign, Feather } from '@expo/vector-icons';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { useState } from 'react';
import { registerCall } from '../../services/api';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/images/logo.png';
import { isRegiserValid } from '../../services/verifications';

export default function RegisterScreen() {

    const navigation = useNavigation();

    const [ hidePass, setHidePass ] = useState(true);
    const [ hideConfirmPass, setHideConfirmPass ] = useState(true);
    const [ name, setName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ inLoad, setInLoad ] = useState(false);

    if (inLoad) {

        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#FE8A07" />
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16 }}>AGUARDE...</Text>
            </View>
        );
    }

    return(
        <SafeAreaView style={styles.homeScreenContainer}>
            <StatusBar style="auto" />
            <ScrollView style={styles.scrollViewContent}>
                <View style={{paddingVertical: 40}}>
                    <View style={{alignItems: 'center'}}>
                        <Image style={{width: 200, height: 200}} source={logo} />
                        <Text style={styles.title}>CADASTRAR-SE</Text>
                    </View>
                    <View>
                        <View style={{flexDirection: 'row', gap: 16, marginTop: 32}}>
                            <TextInput style={styles.inputSearchDouble} placeholder="Nome" value={name} autoCapitalize='none' keyboardType='default' placeholderTextColor={'#fff'} onChangeText={(value) => setName(value)} />
                            <TextInput style={styles.inputSearchDouble} placeholder="Sobrenome" value={lastName} autoCapitalize='none' keyboardType='default' placeholderTextColor={'#fff'} onChangeText={(value) => setLastName(value)} />
                        </View>
                        <View style={styles.inputSearch}>
                            <TextInput style={styles.input} placeholder="E-mail" value={email} autoCapitalize='none' keyboardType='email-address' placeholderTextColor={'#fff'} onChangeText={(value) => setEmail(value)} />
                        </View>
                        <View style={styles.inputSearch}>
                            <TextInput style={styles.input} placeholder="Senha" value={password} autoCapitalize='none' secureTextEntry={hidePass} placeholderTextColor={'#fff'} onChangeText={(value) => setPassword(value)} />
                            <TouchableOpacity style={styles.searchIcon} onPress={() => setHidePass(hidePass ? false : true)}>
                                {
                                    hidePass ? <Feather name="eye-off" size={24} color="white" /> : <AntDesign name="eye" size={24} color="white" />
                                }
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputSearch}>
                            <TextInput style={styles.input} placeholder="Confirmar senha" value={confirmPassword} autoCapitalize='none' secureTextEntry={hideConfirmPass} placeholderTextColor={'#fff'} onChangeText={(value) => setConfirmPassword(value)} />
                            <TouchableOpacity style={styles.searchIcon} onPress={() => setHideConfirmPass(hideConfirmPass ? false : true)}>
                                {
                                    hideConfirmPass ? <Feather name="eye-off" size={24} color="white" /> : <AntDesign name="eye" size={24} color="white" />
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginTop: 32}}>
                        <TouchableOpacity style={styles.btn} onPress={async () => {

                            const result = isRegiserValid(name, lastName, email, password, confirmPassword);

                            if (result.status === false) {

                                alert(result.msg);

                                return;
                            }

                            setInLoad(true);

                            const isSuccess = await registerCall({
                                name, lastName, email, password
                            });

                            if (isSuccess.status === true) {

                                setName('');
                                setLastName('');
                                setEmail('');
                                setPassword('');
                                setConfirmPassword('');
                                setHidePass(true);
                                setHideConfirmPass(true);

                                setInLoad(false);

                                alert(isSuccess.msg);

                                navigation.navigate('Login');

                            } else {

                                setInLoad(false);
    
                                alert(isSuccess.msg);
                            }

                        }}>
                            <Text style={{textAlign: 'center', fontFamily: 'Poppins-Bold', fontSize: 20, color: '#fff'}}>CADASTRAR</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 24, marginTop: 32}}>
                        <View style={styles.line}>
                        </View>
                        <Text style={{fontFamily: 'Poppins-Light'}}>OU</Text>
                        <View style={styles.line}>
                        </View>
                    </View>
                    <View style={{marginTop: 32}}>
                        <TouchableOpacity onPress={() => {
                            setName('');
                            setLastName('');
                            setEmail('');
                            setPassword('');
                            setConfirmPassword('');
                            setHidePass(true);
                            setHideConfirmPass(true);
                    
                            navigation.navigate('Login')
                        }}>
                            <Text style={{fontSize: 16, fontFamily: 'Poppins-Bold', textAlign: 'center'}}>ENTRAR</Text>
                        </TouchableOpacity>
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

    title: {
        fontSize: 24,
        fontFamily: 'Poppins-Bold'
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

    btn: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#FE8A07',
        paddingVertical: 12,
        borderRadius: 16,
        backgroundColor: '#FE8A07'
    },

    line: {
        height: 1,
        flexGrow: 1,
        backgroundColor: '#000'
    }
});

