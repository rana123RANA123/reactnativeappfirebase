import { Image, StyleSheet, Text, Pressable, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import firstpicture from '../../assets/third.jpg'
import icon from '../../assets/right.png'
import arrow from '../../assets/arrow.png'
import useFishStore from '../../../store'
import arrow2 from '../../assets/arrow2.png'

const Page3 = ({ navigation }) => {

    const onPressHandler = () => {
        navigation.goBack();
    };

    const [userData, setUserData] = useState({})

    const { user, addUser } = useFishStore()

    useEffect(() => {
        setUserData(user)
        console.log("useruser", userData)
    }, [])

    const handleNavigate = () => {
        navigation.navigate("Page3");
    };
    const handleNavigate2 = () => {
        navigation.navigate("Hello");
    };

    return (
        <View style={styles.container}>
            <View>
                <Pressable onPress={onPressHandler}>
                    <Image
                        source={(arrow)}
                        style={styles.arrow}
                    />
                </Pressable>
            </View>
            <View style={{display:'flex', alignItems:'flex-end'}}>
                <Pressable onPress={handleNavigate2}>
                    <Image
                        source={(arrow2)}
                        style={styles.arrow2}
                    />
                </Pressable>
            </View>
            <View>
                <Image style={styles.picture} source={(firstpicture)} />
            </View>
            <View>
                <Text style={styles.boldText}>
                    Customize Your High-end Travel
                </Text>
            </View>
            <View>
                <Text style={styles.secondText}>
                    Countless high-end travel
                </Text>
            </View>
            {(userData) ?
                <View>
                    <Pressable onPress={() => { navigation.navigate('Home') }}>
                        <Image
                            source={(icon)}
                            style={styles.icon}
                        />
                    </Pressable>
                </View>
                :
                <View>
                    <Pressable onPress={handleNavigate}>
                        <Image
                            source={(icon)}
                            style={styles.icon}
                        />
                    </Pressable>
                </View>
            }
        </View>

    )
}

export default Page3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    arrow2: {
        height: 23,
        width: 20,
        right:10,
    },
    picture: {
        left: 40,
        top: 140,
        borderRadius: 20,
        position: 'relative',
        height: 260,
        width: 260,
    },
    arrow: {
        height: 20,
        width: 20,
        left: 10,
        top: 20,
    },
    boldText: {
        fontWeight: '900',
        top: 185,
        color: 'black',
        textAlign: 'center',
        paddingHorizontal: 40,
        fontSize: 27,
    },
    secondText: {
        fontWeight: '900',
        top: 210,
        paddingHorizontal: 100,
        textAlign: 'center',
        fontSize: 16,

    },
    icon: {
        left: 140,
        top: 250,
        borderRadius: 40,
        position: 'relative',
        height: 20,
        width: 20,
        paddingHorizontal: 40,
        paddingVertical: 40,
        backgroundColor: '#4361ee',
    }


})