import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';

const Navbar = () => {
    
    return (
        <View style={styles.navbar}>
            <TouchableOpacity>
                <Ionicons name="home-outline" size={24} color="#fff" /> 
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign name="heart" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign name="plus" size={32} color="#FE8A07" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="person-circle-outline" size={28} color="#fff" />
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

        width: Dimensions.get('window').width - 64,
        position: 'absolute',
        bottom: 16,
        alignSelf: 'center',
    }
});

export default Navbar;