import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import receitas from '../../data';
import Recipe from '../Recipe';

const RecipesDisplay = () => {

    // let loader = true;

    // if (loader) {

    //     return (
    //         <View style={styles.spinnerContainer}>
    //             <ActivityIndicator size="large" color="#FE8A07" />
    //             <Text style={{fontSize: 12, fontFamily: 'Poppins-Bold'}}>CARREGANDO...</Text>
    //         </View>
    //     );
    // }

    return (
        <View style={styles.recipeWrapper}>
            {
                receitas.map((receita, index) => {
                    return (
                        <Recipe props={receita} key={index} />
                    )
                })
            }
        </View>
    );
};

const styles = StyleSheet.create({
    spinnerContainer: {
        marginVertical: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }, 

    recipeWrapper: {
        marginTop: 64,
        gap: 32,
    },
});

export default RecipesDisplay;