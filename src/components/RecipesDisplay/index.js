import { StyleSheet, View  } from 'react-native';
import receitas from '../../data';
import Recipe from '../Recipe';

const RecipesDisplay = () => {

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
    recipeWrapper: {
        marginTop: 64,
        gap: 32,
    },
});

export default RecipesDisplay;