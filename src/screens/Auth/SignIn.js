import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import icon from '../../assets/arrow.png'
import { TextInput } from 'react-native'
// import { TextField } from 'native-base'

const SignIn = (props) => {

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
                <Text style={styles.topHeading}>Sign In</Text>
            </View>
            <View style={styles.container2}>
                <TextInput keyboardType='email' style={styles.inputField} placeholder='Enter-e-mail address' />

                <Text style={styles.orContinue2}>Or Continue With</Text>
                <Text style={styles.inputField2} >
                    Continue With Apple
                </Text>
                <Text style={styles.inputField3} >
                    Continue With Facebook
                </Text>


                {/* <View style={{ top: 350, }}>
                    <Button style={styles.button} title='Submit' />
                </View> */}

                <Text style={styles.button} >
                   Submit
                </Text>


            </View>
            <View style={styles.container3}>
            </View>
            <View style={styles.container}>
            </View>
        </>
    )
}

export default SignIn

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
        textAlign: 'center',

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
        left: 15,

    },
    termPolicy2: {
        top: 37,
        fontSize: 15,
        marginHorizontal: 10,
        marginVertical: 9,
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
        borderRadius: 30,
        top: 44,
        textAlign: 'center',
        padding: 13,
        color: 'white',
        backgroundColor: 'black',
    },
    inputField3: {
        backgroundColor: '#00bfff',
        borderColor: 'black',
        textAlign: 'center',
        color:'white',
        top: 62,
        borderRadius: 30,
        padding: 15,
    },
    button: {
        backgroundColor: '#1e90ff',
        borderColor: 'black',
        textAlign: 'center',
        color:'white',
        fontSize:20,
        top: 342,
        borderRadius: 30,
        padding: 15,
    },

})