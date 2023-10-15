import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Feather  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Recipe = ({ props }) => {

    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.navigate('Recipe', props)}>
            <View style={styles.recipe}>
                <Text style={styles.recipeTitle}>{props.title}</Text>

                <View style={styles.recipeStars}>
                    <Feather name="star" size={12} color="#FFCF5C" />
                    <Feather name="star" size={12} color="#FFCF5C" />
                    <Feather name="star" size={12} color="#FFCF5C" />
                    <Feather name="star" size={12} color="#FFCF5C" />
                    <Feather name="star" size={12} color="#FFCF5C" />
                    <Text>4.5</Text>
                </View>
                
                <Text style={styles.recipeAbout}>{props.about}</Text>

                <Image source={{uri: props.image}} style={styles.recipeImage} />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    recipe: {
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 16,
        position: 'relative',
    },

    recipeTitle: {
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
    },

    recipeStars: {
        flexDirection: 'row',
        columnGap: 3,
        alignItems: 'center',
    },

    recipeAbout: {
        fontFamily: 'Poppins-Light',
        marginTop: 13,
        fontSize: 12,
    },

    recipeImage: {
        position: 'absolute',
        width: 100,
        height: 66,
        top: 0,
        right: 0,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 16
    }
});

export default Recipe;