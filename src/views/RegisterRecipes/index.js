import { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Picker } from "@react-native-picker/picker";


import { UserContext } from "../../contexts/UserContext";
import { postRecipe } from "../../services/api";




export default function RegisterRecipes() {

    const { userData } = useContext(UserContext)

    const [ isLoading, setIsLoading ] = useState(false);

    const [dificuldade, setDificuldade] = useState('Selecione');
    const [ingredientes, setIngredientes] = useState([]);
    const [modoDePreparo, setModoDePreparo] = useState([]);
    const [categoria, setCategoria] = useState([]);
    const [inputAdditionalInformation, setInputAdditionalInformation] = useState('');
    const [inputAbout, setInputAbout] = useState('');
    const [inputQts, setInputQts] = useState('');
    const [inputTime, setInputTime] = useState('');
    const [inputUrl, setInputUrl] = useState('');
    const [inputTitle, setInputTitle] = useState('');
    const [inputTexto, setInputTexto] = useState('');
    const [inputTextoModoDePreparo, setInputTextoModoDePreparo] = useState('');
    const [inputTextoCategoria, setInputTextoCategoria] = useState('');

    async function enviar() {

        setIsLoading(true);

        const feedback =  await postRecipe(
            inputTitle,
            inputAbout,
            `${userData.name} ${userData.lastName}`,
            inputUrl,
            inputTime + ' min',
            dificuldade,
            inputQts + ' porções',
            inputAdditionalInformation,
            ingredientes.join(';'),
            modoDePreparo.join(';'),
            categoria.join(';'),
            userData.id
        );

        if (feedback.status) {

            setDificuldade('Selecione');
            setIngredientes([]);
            setModoDePreparo([]);
            setCategoria([]);
            setInputAdditionalInformation('');
            setInputAbout('');
            setInputQts('');
            setInputTime('');
            setInputUrl('');
            setInputTitle('');
            setInputTexto('');
            setInputTextoModoDePreparo('');
            setInputTextoCategoria('');
        }

        setIsLoading(false);

        alert(feedback.msg)
    }

    const handleTextChange = (texto, indexItem) => {
        const newIngredientes = [...ingredientes]; // Cria uma cópia do array ingredientes
        newIngredientes[indexItem] = texto; // Atualiza o elemento específico

        setIngredientes(newIngredientes); // Define o novo estado
    };
    const addIngrediente = () => {
        if (inputTexto != '') {
            const newIngredientes = [...ingredientes];
            newIngredientes.push(inputTexto);
            setIngredientes(newIngredientes);
            setInputTexto('');
        }
    }

    const removeIngrediente = () => {
        if (ingredientes.length > -1) {
            const newIngredientes = [...ingredientes];
            newIngredientes.pop();
            setIngredientes(newIngredientes);

        }

    }
    const handleTextChangeMododePreparo = (texto, indexItem) => {
        const newModoDePreparo = [...modoDePreparo]; // Cria uma cópia do array modo de preparo
        newModoDePreparo[indexItem] = texto; // Atualiza o elemento específico

        setModoDePreparo(newModoDePreparo); // Define o novo estado
    };
    const addModoDePreparo = () => {
        if (inputTextoModoDePreparo != '') {
            const newModoDePreparo = [...modoDePreparo];
            newModoDePreparo.push(inputTextoModoDePreparo);
            setModoDePreparo(newModoDePreparo);
            setInputTextoModoDePreparo('');
        }
    }

    const removeModoDePreparo = () => {
        if (modoDePreparo.length > -1) {
            const newModoDePreparo = [...modoDePreparo];
            newModoDePreparo.pop();
            setModoDePreparo(newModoDePreparo);

        }

    }
    const handleTextChangeCategoria = (texto, indexItem) => {
        const newcategoria = [...categoria]; // Cria uma cópia do array modo de preparo
        newcategoria[indexItem] = texto; // Atualiza o elemento específico

        setCategoria(newcategoria); // Define o novo estado
    };
    const addCategoria = () => {
        if (inputTextoCategoria != '') {
            const newcategoria = [...categoria];
            newcategoria.push(inputTextoCategoria);
            setCategoria(newcategoria);
            setInputTextoCategoria('');
        }
    }

    const removeCategoria = () => {
        if (categoria.length > -1) {
            const newcategoria = [...categoria];
            newcategoria.pop();
            setCategoria(newcategoria);

        }

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
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView >
                <SafeAreaView style={styles.homeScreenContainer}>
                    <StatusBar style="auto" />
                    <View>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 32, textAlign: 'center' }}>Crie sua receita!</Text>
                    </View>
                    <View style={{ gap: 10, }}>
                        <Text style={styles.textTitulo}>Titulo:</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#fff"
                            placeholder="Digite o titulo da receita."
                            multiline={true}
                            value={inputTitle}
                            onChangeText={(texto) => setInputTitle(texto)}
                        />
                        <Text style={styles.textTitulo}>Imagem:</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#fff"
                            placeholder="Cole o link da imagem aqui!!!"
                            value={inputUrl}
                            onChangeText={(texto) => setInputUrl(texto)}
                        />
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, }}>
                            <Text style={styles.textTitulo2}>Tempo:</Text>
                            <TextInput
                                style={styles.inputTempo}
                                keyboardType="numeric"
                                placeholderTextColor="#fff"
                                placeholder="Min"
                                maxLength={3}
                                value={inputTime}
                                onChangeText={(texto) => setInputTime(texto)}
                            />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, }}>
                            <Text style={styles.textTitulo2}>Porções:</Text>
                            <TextInput
                                style={styles.inputQts}
                                keyboardType="numeric"
                                placeholderTextColor="#fff"
                                placeholder="Qts"
                                maxLength={2}
                                value={inputQts}
                                onChangeText={(texto) => setInputQts(texto)}
                            />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, }}>
                            <Text style={styles.textTitulo2}>Dificuldade:</Text>
                            <View style={{ width: '50%', height: 50, backgroundColor: "#242A37", borderRadius: 10, }}>
                                <Picker style={{ color: '#fff', }} selectedValue={dificuldade} onValueChange={(value) => { setDificuldade(value) }}>
                                    <Picker.Item value='Selecione' label="Selecione" />
                                    <Picker.Item value='Baixo' label="Baixo" />
                                    <Picker.Item value='Medio' label="Médio" />
                                    <Picker.Item value='Alto' label="Alto" />

                                </Picker>
                            </View>
                        </View>
                        <View style={{ gap: 10, }}>
                            <Text style={styles.textTitulo}>Ingredientes:</Text>
                            {
                                ingredientes.map((item, indexItem) => {
                                    return (
                                        <View key={indexItem} style={styles.linha}>
                                            <Text style={styles.txtInput}>{indexItem + 1} -</Text>
                                            <TextInput style={styles.txtInput} multiline={true} value={ingredientes[indexItem]}
                                                onChangeText={(texto) => handleTextChange(texto, indexItem)} />
                                        </View>
                                    )
                                })
                            }
                            <View>
                                <Text style={styles.txtInput}>{ingredientes.length + 1} -</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholderTextColor="#fff"
                                    placeholder="Adicione aqui!!"
                                    multiline={true}
                                    value={inputTexto}
                                    onChangeText={(texto) => setInputTexto(texto)}
                                />
                            </View>
                            <View style={styles.btn}>
                                <TouchableOpacity onPress={() => addIngrediente()}>
                                    <AntDesign name="pluscircle" size={32} color="orange" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => removeIngrediente()}>
                                    <AntDesign name="minuscircle" size={32} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ gap: 10, }}>
                            <Text style={styles.textTitulo}>Modo de Preparo:</Text>
                            {
                                modoDePreparo.map((item, indexItem) => {
                                    return (
                                        <View key={indexItem} style={styles.linha}>
                                            <Text style={styles.txtInput}>{indexItem + 1} -</Text>
                                            <TextInput style={styles.txtInput} multiline={true} value={modoDePreparo[indexItem]} onChangeText={(texto) => handleTextChangeMododePreparo(texto, indexItem)} />
                                        </View>
                                    )
                                })
                            }
                            <TextInput
                                style={styles.inputModo}
                                placeholderTextColor="#fff"
                                placeholder="Adicione aqui!!"
                                multiline={true}
                                value={inputTextoModoDePreparo}
                                onChangeText={(texto) => setInputTextoModoDePreparo(texto)}
                            />
                            <View style={styles.btn}>
                                <TouchableOpacity onPress={() => addModoDePreparo()}>
                                    <AntDesign name="pluscircle" size={32} color="orange" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => removeModoDePreparo()}>
                                    <AntDesign name="minuscircle" size={32} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ gap: 5, }} >
                            <Text style={styles.textTitulo}>Categoria:</Text>
                            <View style={{ gap: 8, flexDirection: 'row', flexWrap: 'wrap', }}>

                                {
                                    categoria.map((item, indexItem) => {
                                        return (

                                            <TextInput style={{ color: '#fff', fontSize: 20, padding: 10, backgroundColor: '#242A37', width: 150, borderRadius: 10, }} multiline={true} value={categoria[indexItem]} onChangeText={(texto) => handleTextChangeCategoria(texto, indexItem)} />
                                        )
                                    })
                                }
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor="#fff"
                                placeholder="Adicione Aqui!!"
                                value={inputTextoCategoria}
                                onChangeText={(texto) => setInputTextoCategoria(texto)}
                            />
                            <View style={{ flexDirection: "row", justifyContent: "center", gap: 20, }}>
                                <TouchableOpacity onPress={() => addCategoria()}>
                                    <AntDesign name="pluscircle" size={32} color="orange" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => removeCategoria()}>
                                    <AntDesign name="minuscircle" size={32} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ gap: 5, }} >
                            <Text style={styles.textTitulo}>Sobre:</Text>
                            <TextInput
                                style={styles.inputModo}
                                placeholderTextColor="#fff"
                                placeholder="Escreva um breve resumo sobre a sua receita"
                                multiline={true}
                                value={inputAbout}
                                onChangeText={(texto) => setInputAbout(texto)}
                            />
                        </View>
                        <View style={{ gap: 5, }} >
                            <Text style={styles.textTitulo}>Informações Adicional:</Text>
                            <TextInput
                                style={styles.inputModo}
                                placeholderTextColor="#fff"
                                placeholder="Informações adicionais sobre sua receita"
                                multiline={true}
                                value={inputAdditionalInformation}
                                onChangeText={(texto) => setInputAdditionalInformation(texto)}
                            />
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 10, }}>
                            <TouchableOpacity style={{ width: '100%', height: 50, justifyContent: 'center', borderRadius: 10, backgroundColor: 'orange' }} onPress={() => enviar()}>
                                <Text style={{ textAlign: 'center', fontSize: 20, color: '#fff' }}>Cadastrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    homeScreenContainer: {
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 20,
        marginBottom: 40,
        backgroundColor: '#fff',
    },
    textTitulo: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    input: {
        height: 50,
        fontSize: 20,
        borderRadius: 10,
        padding: 10,
        color: '#fff',
        backgroundColor: '#242A37',
        flexWrap: 'wrap'
    },
    textTitulo2: {
        fontSize: 20,
    },
    inputTempo: {
        width: 80,
        height: 40,
        padding: 10,
        borderRadius: 10,
        color: '#fff',
        backgroundColor: '#242A37',
        textAlign: 'center',
        fontSize: 15,

    },
    inputQts: {
        width: 100,
        height: 40,
        padding: 10,
        borderRadius: 10,
        color: '#fff',
        backgroundColor: '#242A37',
        textAlign: 'center',
        fontSize: 15,
    },
    linha: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        backgroundColor: '#242A37',
        borderRadius: 10,
        padding: 10,

    },
    txtInput: {
        color: '#fff',
        fontSize: 20,

    },
    btn: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 20,
    },
    inputModo: {
        height: 100,
        width: '100%',
        fontSize: 16,
        borderRadius: 10,
        padding: 10,
        color: '#fff',
        backgroundColor: '#242A37',
        flexWrap: 'wrap',

    },

});