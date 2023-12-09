import { StyleSheet, Image, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth';
import firstpicture from '../../assets/two.jpg'
import useFishStore from '../../../store'
const Logout = ({ navigation }) => {

    const { user, addUser } = useFishStore()

    const [userData, setUserData] = useState({})

    useEffect(() => {
        setUserData(user)
    }, [])

    const handleLogout = () => {

        auth()
        .signOut()
        .then(() => console.log('User signed out!'));
        addUser();
        setUserData({})
        navigation.navigate('Hello')
    };

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.picture} source={(firstpicture)} />
            </View>
            <View>
                <Text style={styles.inputField2} onPress={handleLogout}>
                    Logout
                </Text>
                {/* <Text style={styles.inputField3}  onPress={() => {navigation.navigate('SignUpFree')}}>
          Sign-Up
        </Text> */}
            </View>
        </View>
    )
}

export default Logout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    picture: {
        left: -14,
        top: 40,
        borderRadius: 20,
        position: 'relative',
        height: 400,
        width: 400,
    },
    inputField2: {
        borderColor: 'black',
        borderRadius: 30,
        top: 84,
        fontSize: 20,
        textAlign: 'center',
        padding: 13,
        marginHorizontal: 40,
        color: 'white',
        backgroundColor: 'black',
    },
    inputField3: {
        borderColor: 'black',
        borderRadius: 30,
        top: 94,
        fontSize: 20,
        textAlign: 'center',
        padding: 13,
        marginHorizontal: 40,
        color: 'white',
        backgroundColor: 'black',
    },

})