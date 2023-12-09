import { Image, StyleSheet, Text, Pressable, View } from 'react-native'
import React from 'react'
import firstpicture from '../../assets/first.jpg'
import icon from '../../assets/right.png'
import arrow2 from '../../assets/arrow2.png'

const Page1 = ({ navigation }) => {

    const onPressHandler = () => {
        navigation.navigate("Page2");
    };

    const handleNavigate2 = () => {
        navigation.navigate("Page2");
    };

    return (
        <View style={styles.container}>
            <View style={{ display: 'flex', alignItems: 'flex-end' }}>
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
                    Make Your Own Private Travel Plan
                </Text>
            </View>
            <View>
                <Text style={styles.secondText}>
                    Formulate Your Strategy To Receive Wonderful Gift Packs
                </Text>
            </View>
            <View>
                {/* <Image style={styles.icon} source={(icon)}  /> */}
                <Pressable onPress={onPressHandler}>
                    <Image
                        source={(icon)}
                        style={styles.icon}
                    />
                </Pressable>
            </View>
        </View>

    )
}

export default Page1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    picture: {
        left: 40,
        top: 140,
        borderRadius: 20,
        position: 'relative',
        height: 260,
        width: 260,
        backgroundColor: 'white',
    },
    boldText: {
        backgroundColor: 'white',
        fontWeight: '900',
        top: 185,
        color: 'black',
        textAlign: 'center',
        fontSize: 27,
    },
    secondText: {
        fontWeight: '900',
        top: 210,
        paddingHorizontal: 20,
        textAlign: 'center',
        fontSize: 16,

    },
    arrow2: {
        height: 24,
        width: 20,
        right:15,
        top:20,
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