import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons, AntDesign, FontAwesome, Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const RecipeLayout = () => {

    const navigation = useNavigation();

    const recipe = useRoute().params;

    const [fav, setFav] = useState(false);
    const [stars, setStars] = useState(false);
    
    return (
        <View>
            <View>
                <View style={styles.navbar}> 
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Ionicons name="arrow-back-circle-outline" size={32} color="black" />   
                        </TouchableOpacity>
                    <TouchableOpacity onPress={() => fav ? setFav(false) : setFav(true)}>
                        <AntDesign name={ fav ? "heart" : "hearto"} size={28} color="#FE8A07" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={{fontSize: 32, fontFamily: 'Poppins-Bold', textAlign: 'center', marginTop: 21}}>{recipe.title}</Text>
                </TouchableOpacity>
                <View style={styles.imageContainer}>
                    <Image source={{uri: recipe.image}} style={styles.image} resizeMode="cover" />
                </View>
                
                <View style={styles.user}>
                    <TouchableOpacity>
                        <FontAwesome style={styles.userby} name="user-circle-o" size={32} color="#717171" />
                    </TouchableOpacity>
                    <Text style={styles.usertext}>Por: {recipe.author}</Text>
                </View>
                <View style={styles.recipedetails}>
                    <View style={styles.details}>
                        <Text style={styles.detailsTitle}>
                            Tempo de preparo
                        </Text>
                        <View style={styles.time}>
                            <Ionicons name="ios-alarm-outline" size={24} color="#333" />
                            <Text style={styles.textdetails}>
                                {recipe.duration}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailsTitle}>
                            Rende
                        </Text>

                        <Text style={styles.textdetails}>
                            {recipe.portion}
                        </Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailsTitle}>
                            Dificuldade
                        </Text>

                        <Text style={styles.textdetails}>
                            {recipe.difficult}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.main}>
                <View style={styles.ingredients}>
                    <TouchableOpacity>
                        <Text style={styles.title}>Ingredientes</Text>
                    </TouchableOpacity>
                    <View style={styles.ingredientsList}>

                        {
                            recipe.ingredients.map((item, index) => {
                                return (
                                    <View style={styles.ingredientitem} key={index}>
                                        <Entypo name="check" size={20} color="black" />
                                        <Text style={styles.text}>{item}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
                <View style={styles.prepare}>
                    <TouchableOpacity>
                        <Text style={styles.title}>Modo de Preparo</Text>
                    </TouchableOpacity>
                    <View style={{gap: 24, marginBottom: 32}}>

                        {
                            recipe.methodPreparation.map((item, index) => {
                                return(
                                    <View style={styles.prepareItem} key={index+1}>
                                        <MaterialCommunityIcons name={`numeric-${index+1}-circle-outline`} size={24} color="black" />
                                        <Text style={styles.text}>{item}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
                <View style={{marginVertical: 32, backgroundColor: '#333', padding: 16, borderRadius: 16}}>
                    <TouchableOpacity>
                        <Text style={{textAlign: 'center', marginBottom: 16, fontFamily: 'Poppins-Bold', fontSize: 24, color: '#FE8A07'}}>Avalie essa receita!</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8}}>
                        <TouchableOpacity onPress={() => typeof stars === Boolean || stars != 1 ? setStars(1) : setStars(false) }>
                            <Icon name={stars >= 1 ? "star" : "star-outline"} size={24} color="#FFCF5C" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => typeof stars === Boolean || stars != 2 ? setStars(2) : setStars(false) }>
                            <Icon name={stars >= 2 ? "star" : "star-outline"} size={24} color="#FFCF5C" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => typeof stars === Boolean || stars != 3 ? setStars(3) : setStars(false) }>
                            <Icon name={stars >= 3 ? "star" : "star-outline"} size={24} color="#FFCF5C" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => typeof stars === Boolean || stars != 4 ? setStars(4) : setStars(false) }>
                            <Icon name={stars >= 4 ? "star" : "star-outline"} size={24} color="#FFCF5C" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => typeof stars === Boolean || stars != 5 ? setStars(5) : setStars(false) }>
                            <Icon name={stars >= 5 ? "star" : "star-outline"} size={24} color="#FFCF5C" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{borderWidth: 1, borderColor: '#999', padding: 32, borderRadius: 16, marginBottom: 32}}>
                    <TouchableOpacity>
                        <Text style={{fontFamily: 'Poppins-Bold', fontSize: 24, color:'#333', marginBottom: 16, textAlign: 'center',}}>Informações adicionais</Text>
                    </TouchableOpacity>
                    <Text style={{fontFamily: 'Poppins-Light', fontSize: 16, color:'#333', marginBottom: 32, textAlign: 'center',}}>Dicas para fazer uma receita de {recipe.title}</Text>
                    <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16, color:'#333', textAlign: 'justify', }}>
                        {recipe.additionalInformation}
                    </Text>
                </View>
                <View>
                    <Text style={{fontFamily: 'Poppins-Bold', fontSize: 16, color: '#333'}}>Categorias relacionadas</Text>
                    <View style={styles.categoriesWrapper}> 

                        {
                            recipe.categories.map((item, index) => {
                                return(
                                    <TouchableOpacity style={styles.categorie} key={index}>
                                        <Text style={styles.categorieText}>{item}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageContainer: {
        width:'100%',   
        alignItems:'center',     
        marginTop: 32,
        maxHeight:225,
        borderColor: 'gray',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius:16,
    },

    user:{
        flexDirection:'row',
        marginTop:17,
        alignItems:'center',
        justifyContent: 'center',
        gap: 16,
        marginBottom:32,
    },

    usertext:{
        fontFamily: 'Poppins-Regular',
        fontSize:16,
    },
    recipedetails:{
        borderTopWidth:1,
        borderBottomWidth:1,
        height:105,
        borderColor:'#999999',
        justifyContent: 'space-between',
        flexDirection:'row',
        alignItems:'center',
    },

    details:{
        alignItems:'center',
        gap:16,
    },

    time:{
        flexDirection:'row',
        gap:8,
        alignItems:'center',
    },

    detailsTitle:{
        fontFamily: 'Poppins-Bold',
        fontSize:15,
        color:'#333'
    },

    textdetails:{
        fontSize:14,
        fontFamily:'Poppins-Bold'
    },

    main:{
        marginTop:32,
    },

    ingredients:{
        color:'#fff',
        width:'100%',  
        alignItems:'center', 
        borderBottomWidth:0.5,
        borderBottomColor:'#717171',
    },

    prepare:{
        color:'#fff',
        width:'100%',  
        alignItems:'center', 
        borderBottomWidth:0.5,
        borderBottomColor:'#717171',
        marginTop: 32,
    },

    title: {
        fontFamily: 'Poppins-Bold', 
        fontSize: 24,
        color:'#333',
        marginBottom: 32,
        textAlign: 'center',
    },

    text: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#333',
    },

    ingredientsList:{
        alignItems:'flex-start',
        width:'100%',
        gap:16,
        marginBottom:32,
    },

    ingredientitem:{
        fontFamily:'Poppins-Regular',
        flexDirection:'row',
        justifyContent:'flex-start',
        gap:16,
        alignItems:'center',
    },

    prepareItem: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 16,
        maxWidth: '100%'
    }, 

    categoriesWrapper: {
        marginTop: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16,
    },

    categorie: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#333',
        borderRadius: 16,
    },

    categorieText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 13,
        color: '#FE8A07',
        verticalAlign: 'middle'
    }
});

export default RecipeLayout;
