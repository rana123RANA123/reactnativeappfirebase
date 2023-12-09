import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import firstpicture from '../../assets/one.jpg'
const Hello = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.picture} source={(firstpicture)} />
      </View>
      <View>
        <Text style={styles.inputField2}  onPress={() => {navigation.navigate('Loginn')}}>
          Login
        </Text>
        <Text style={styles.inputField3}  onPress={() => {navigation.navigate('SignUpFree')}}>
          Sign-Up
        </Text>
      </View>
    </View>
  )
}

export default Hello

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
    fontSize:20,
    textAlign: 'center',
    padding: 13,
    marginHorizontal:40,
    color: 'white',
    backgroundColor: 'black',
  },
  inputField3: {
    borderColor: 'black',
    borderRadius: 30,
    top: 94,
    fontSize:20,
    textAlign: 'center',
    padding: 13,
    marginHorizontal:40,
    color: 'white',
    backgroundColor: 'black',
  },

})