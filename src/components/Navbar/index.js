import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { getToken } from '../../services/verifications';

const Navbar = () => {

    const navigation = useNavigation();

    
    
    return (
        <View style={styles.navbar}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons name="home-outline" size={24} color="#fff" /> 
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign name="heart" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Feather name="plus" size={32} color="white" style={{ backgroundColor: "#FE8A07", borderRadius: 50, padding: 4 }} />
            </TouchableOpacity>
            <TouchableOpacity  onPress={async () => {

                if ((await getToken()).status === true) {

                    navigation.navigate('Profile')
                } else {

                    alert("Falha de autenticação, tente logar novamente!");
                    navigation.navigate('Profile');
                }
            }}>
                <Ionicons name="md-person-circle-outline" size={32} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Feather name="settings" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#242A37',
        paddingHorizontal: 32,
        paddingVertical: 8,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        width: Dimensions.get('window').width - 40,
        position: 'absolute',
        bottom: 16,
        alignSelf: 'center',
    }
});

export default Navbar;