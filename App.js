import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from "native-base";
import Frontend from './src/screens/Frontend'
// import SplashScreen from 'react-native-splash-screen';
// import Loginn from './src/screens/Frontend/Loginn';
const App = () => {

  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
    <NavigationContainer>
      <NativeBaseProvider>

        <Frontend />
        {/* <View>
          <Text>
            hello
          </Text>
        </View> */}

      </NativeBaseProvider>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})