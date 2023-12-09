import { StyleSheet, Text, ScrollView, Pressable, TextInput, Image, View, alert } from 'react-native'
import React, { useState } from 'react'
import icon from '../../assets/arrow.png'
import firstpicture from '../../assets/two.jpg'

const initialState = { email: '', password: '' }

const Login2 = (props) => {

    const [state, setState] = useState(initialState)

    const handleChange = (name, value) => {
        setState(s => ({ ...s, [name]: value }))
    }

    const handleLogin = () => {
        let { email, password } = state

        if (!email) {
            return alert("Please enter your email correctly")
        }
        if (password.length < 6) {
            return alert("Please enter your password correctly")
        }

        console.log("Login Data", state)

    }


    const onPressHandler = () => {
        props.navigation.goBack();
    };



    return (
        <ScrollView style={styles.container}>
            <View>
                <Pressable onPress={onPressHandler}>
                    <Image
                        source={(icon)}
                        style={styles.icon}
                    />
                </Pressable>
            </View>
            <View>
                <Image style={styles.picture} source={(firstpicture)} />
            </View>
            <View>
                <Text style={styles.topHeading}>Login</Text>
            </View>
            <View>
                <Text style={styles.title1}>Email</Text>
            </View>
            <View>
                <TextInput style={styles.inputField1} onChangeText={val => handleChange("Email", val)} placeholder='Enter-e-mail address' />
            </View>
            <View>
                <Text style={styles.title1}>Password</Text>
            </View>
            <View>
                <TextInput style={styles.inputField1} onChangeText={val => handleChange("Password", val)} placeholder='Enter your password' />
            </View>
            <Text style={styles.button} onPress={handleLogin} >
                Submit
            </Text>

        </ScrollView>
    )
}

export default Login2

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },

    topHeading: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        top: 30,
    },
    icon: {
        height: 20,
        width: 20,
        left: 10,
        top: 20,
    },
    picture: {
        left: 24,
        top: 10,
        borderRadius: 20,
        position: 'relative',
        height: 300,
        width: 300,
    },
    title1: {
        fontSize: 17,
        marginHorizontal: 40,
        marginVertical: 9,
        top: 40,

    },
    inputField1: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        padding: 15,
        top: 40,
        marginHorizontal: 30,
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: '#1e90ff',
        borderColor: 'black',
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        top: 110,
        borderRadius: 30,
        padding: 15,
    },
})