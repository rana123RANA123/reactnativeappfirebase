import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import icon from '../../assets/arrow.png'
import { TextInput } from 'react-native'
// import { TextField } from 'native-base'

const Loginn = (props) => {

    const onPressHandler = () => {
        props.navigation.goBack();
    };

    return (
        <>
            <View style={styles.container}>
                <View>
                    <Pressable onPress={onPressHandler}>
                        <Image
                            source={(icon)}
                            style={styles.icon}
                        />
                    </Pressable>
                </View>
                <Text style={styles.topHeading}>Login </Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.orContinue}>E-mail-address</Text>
                <TextInput keyboardType='email' style={styles.inputField} placeholder='Enter-e-mail address' />

                <Text style={styles.orContinue2}>Password</Text>
                <TextInput style={styles.inputField2} placeholder='Enter your password' />

               
                <View style={{ display: 'flex', textAlign: 'center', flexDirection: 'row', top: 20, }}>
                    <Text style={styles.termPolicy}>Already a member?</Text>
                    <Text style={styles.termPolicy2} onPress={() => { navigation.navigate('SignIn') }}>Log in</Text>
                </View>

                <Text style={styles.button} >
                    Submit
                </Text>


            </View>
            <View style={styles.container3}>
            </View>
        </>
    )
}

export default Loginn

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        flex: 2,
        top: 30,
        marginHorizontal: 25,
    },
    container3: {
        flex: 2,
    },
    topHeading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        top: 60,
        textAlign: 'center',
    },
    icon: {
        height: 20,
        width: 20,
        left: 10,
        top: 20,
    },
    orContinue: {
        fontSize: 15,
        marginHorizontal: 10,
        marginVertical: 9,

    },
    orContinue2: {
        fontSize: 15,
        marginHorizontal: 10,
        top: 23,
        marginVertical: 9,

    },
    orContinue3: {
        top: 40,
        fontSize: 15,
        marginHorizontal: 10,
        marginVertical: 9,

    },
    termPolicy: {
        top: 37,
        fontSize: 15,
        marginHorizontal: 10,
        marginVertical: 9,
        color: 'black',
        

    },
    termPolicy2: {
        top: 37,
        fontSize: 15,
        marginHorizontal: 10,
        marginVertical: 9,
        right:10,
        color: '#4361ee',
        fontWeight: 'bold',
    },
    inputField: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        padding: 15,
    },
    inputField2: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        top: 24,
        padding: 15,
    },
    inputField3: {
        borderColor: 'black',
        borderWidth: 1,
        top: 42,
        borderRadius: 30,
        padding: 15,
    },
    button: {
        backgroundColor: '#1e90ff',
        borderColor: 'black',
        textAlign: 'center',
        color:'white',
        fontSize:20,
        top: 272,
        borderRadius: 30,
        padding: 15,
    },
})