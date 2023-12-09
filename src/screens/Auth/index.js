import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Loginn from './Loginn'
import SignIn from './SignIn'
import SignUpFree from './SignUpFree'
import Hello from './Hello'

const Stack = createNativeStackNavigator()


const index = () => {
  return (
    <>
    <Stack.Navigator>
        <Stack.Screen name='Hello' component={Hello} options={{headerShown: false}} />
        <Stack.Screen name='SignUpFree' component={SignUpFree} options={{headerShown: false}} />
        <Stack.Screen name='Loginn' component={Loginn} options={{headerShown: false}} />
        <Stack.Screen name='SignIn' component={SignIn} options={{headerShown: false}}/>
    </Stack.Navigator>
    </>
  )
}

export default index