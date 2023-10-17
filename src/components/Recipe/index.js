import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const Recipe = ({ props }) => {

    const navigation = useNavigation();

    const stars = props.stars;

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Recipe', props)}>
            <View style={styles.recipe}>
                <Text style={styles.recipeTitle}>{props.title}</Text>

                <View style={styles.recipeStars}>
                    <Icon name={ stars > 0 ? "star" : "star-outline"} size={12} color="#FFCF5C" />
                    <Icon name={ stars > 1 ? "star" : "star-outline"} size={12} color="#FFCF5C" />
                    <Icon name={ stars > 2 ? "star" : "star-outline"} size={12} color="#FFCF5C" />
                    <Icon name={ stars > 3 ? "star" : "star-outline"} size={12} color="#FFCF5C" />
                    <Icon name={ stars > 4 ? "star" : "star-outline"} size={12} color="#FFCF5C" />
                    <Text>{stars.toFixed(1)}</Text>
                </View>
                
                <Text style={styles.recipeAbout}>{props.about}</Text>

                <Image source={{uri: props.image}} style={styles.recipeImage} />
            </View>
        </TouchableOpacity>
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