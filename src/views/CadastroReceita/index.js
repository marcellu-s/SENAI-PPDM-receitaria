import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Add from "../../assets/images/Add.png";
import Remove from "../../assets/images/Remove.png";

export default function CadastroReceita() {
    const [dificuldade, setDificuldade] = useState('Selecione');
    const [ingredientes, setingrdientes] = useState(['arroz', 'feijão']);
    const [modoDePreparo, setModoDePreparo] = useState(['Leve ao forno', 'Humideça'])
    const [categoria, setCategoria] = useState(['bolo', 'massas', 'sobremesa'])

    function vetorIngredientes() {

    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView >
                <SafeAreaView style={styles.homeScreenContainer}>
                    <StatusBar style="auto" />
                    <View style={{ gap: 10, }}>
                        <Text style={styles.textTitulo}>Titulo:</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#fff"
                            placeholder="Digite o titulo da receita."
                        />
                        <Text style={styles.textTitulo}>Imagem:</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#fff"
                            placeholder="cole o link da imagem aqui!!!"
                        />
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, }}>
                            <Text style={styles.textTitulo2}>Tempo:</Text>
                            <TextInput
                                style={styles.inputTempo}
                                keyboardType="numeric"
                                placeholderTextColor="#fff"
                                placeholder="Min"
                                maxLength={3}
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
                            />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, }}>
                            <Text style={styles.textTitulo2}>Dificuldade:</Text>
                            <Picker style={{ width: '50%', height: 50, backgroundColor: "#242A37", color: '#fff', }} selectedValue={dificuldade} onValueChange={(value) => { setDificuldade(value) }}>
                                <Picker.Item value='Selecione' label="Selecione" />
                                <Picker.Item value='Baixo' label="Baixo" />
                                <Picker.Item value='Medio' label="Médio" />
                                <Picker.Item value='Alto' label="Alto" />

                            </Picker>
                        </View>
                        <View style={{gap: 10,}}>
                            <Text style={styles.textTitulo}>Ingredientes:</Text>
                            {
                                ingredientes.map((item, indexItem) => {
                                    return (
                                        <View key={indexItem} style={{ flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: '#242A37', borderRadius: 10, padding: 10, }}>
                                            <Text style={{ color: '#fff', fontSize: 20, }}>{indexItem} -</Text>
                                            <TextInput style={{ color: '#fff', fontSize: 20, }} value={item} />
                                        </View>
                                    )
                                })
                            }
                            <TextInput
                                style={styles.input}
                                placeholderTextColor="#fff"
                                placeholder="Ingrediente"
                            />
                            <View style={{ flexDirection: "row", justifyContent: "center", gap: 20, }}>
                                <TouchableOpacity>
                                    <Image source={Add} alt="Botão de adicionar" />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={Remove} alt="Botão de remover." />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{gap: 10,}}>
                            <Text style={styles.textTitulo}>Modo de Preparo:</Text>
                            {
                                modoDePreparo.map((item, indexItem) => {
                                    return (
                                        <View key={indexItem} style={{ flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: '#242A37', borderRadius: 10, padding: 10, }}>
                                            <Text style={{ color: '#fff', fontSize: 20, }}>{indexItem} -</Text>
                                            <TextInput style={{ color: '#fff', fontSize: 20, }} value={item} />
                                        </View>
                                    )
                                })
                            }
                            <TextInput
                                style={styles.input}
                                placeholderTextColor="#fff"
                                placeholder="Ingrediente"
                            />
                            <View style={{ flexDirection: "row", justifyContent: "center", gap: 20, }}>
                                <TouchableOpacity>
                                    <Image source={Add} alt="Botão de adiconar." />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={Remove} alt="Botão de remover." />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{gap: 8,}}>
                            <Text style={styles.textTitulo}>Categoria:</Text>
                            {
                                categoria.map((item, indexItem) => {
                                    return (
                                        // <View key={indexItem} style={{ flexDirection: 'column', gap: 5,, borderRadius: 10,  }}>
                                            <TextInput key={indexItem} style={{ color: '#fff', fontSize: 20, padding: 10,  backgroundColor: '#242A37', width: 150, borderRadius: 10,}} value={item} onChange={(item, index) => { console.log(item, "PARA COM ISSO", index)}}/>
                                        // </View>
                                    )
                                })
                            }
                            <TextInput
                                style={styles.input}
                                placeholderTextColor="#fff"
                                placeholder="Ingrediente"
                            />
                            <View style={{ flexDirection: "row", justifyContent: "center", gap: 20, }}>
                                <TouchableOpacity>
                                    <Image source={Add} alt="Botão de adiconar." />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={Remove} alt="Botão de remover." />
                                </TouchableOpacity>
                            </View>
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
});