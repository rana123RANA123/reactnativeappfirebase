import { Image, StyleSheet, Text, Pressable, View } from 'react-native'
import React from 'react'
import firstpicture from '../../assets/second.jpg'
import icon from '../../assets/right.png'
import arrow from '../../assets/arrow.png'
import arrow2 from '../../assets/arrow2.png'



const Page2 = ({ navigation }) => {

    const onPressHandler = () => {
        navigation.goBack();
    };

    const handleNavigate = () => {
        navigation.navigate("Page3");
    };

    const handleNavigate2 = () => {
        navigation.navigate("Page3");
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
                    High-End Leisure Projects To Choose From
                </Text>
            </View>
            <View>
                <Text style={styles.secondText}>
                    The world's first class modern leisure and entertainment method
                </Text>
            </View>
            <View>
                {/* <Image style={styles.icon} source={(icon)}  /> */}
                <Pressable onPress={handleNavigate}>
                    <Image
                        source={(icon)}
                        style={styles.icon}
                    />
                </Pressable>
            </View>
        </View>

    )
}

export default Page2

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
    },
    boldText: {
        fontWeight: '900',
        top: 185,
        color: 'black',
        textAlign: 'center',
        paddingHorizontal: 20,
        fontSize: 27,
    },
    secondText: {
        fontWeight: '900',
        top: 210,
        paddingHorizontal: 20,
        textAlign: 'center',
        fontSize: 16,

    },
    arrow: {
        height: 20,
        width: 20,
        left: 10,
        top: 20,
    },
    arrow2: {
        height: 23,
        width: 20,
        right:10,
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