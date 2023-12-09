import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import Home from './Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import auth from '@react-native-firebase/auth';
import About from './About'
import Contact from './Contact'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Hello from './Hello'
import Loginn from './Loginn'
import SignIn from './SignIn'
import SignUpFree from './SignUpFree'
// import Logout from './Logout'
import TabNavigation from './TabNavigation'
// import Drawerr from './Drawerr'

const Stack = createNativeStackNavigator()

const index = () => {
  const [newuser, setNewUser] = useState({})

  useEffect(() => {
    auth().onAuthStateChanged((newuser) => {
      if (newuser) {
        setNewUser(newuser)
        console.log("user login with this data :- ", newuser)
      }
      else {
        console.log("User isn't signed in")
      }
    })
  }, [])
  return (
    <>

      <Stack.Navigator initialRouteName= {'Page1'}>
          <Stack.Screen name='Page1' component={Page1} options={{ headerShown: false }} />
          <Stack.Screen name='Page2' component={Page2} options={{ headerShown: false }} />
          <Stack.Screen name='Page3' component={Page3} options={{ headerShown: false }} />
          <Stack.Screen name='Hello' component={Hello} options={{ headerShown: false }} />
          <Stack.Screen name='Loginn' component={Loginn} options={{ headerShown: false }} />
          <Stack.Screen name='SignUpFree' component={SignUpFree} options={{ headerShown: false }} />
          <Stack.Screen name='TabNavigation' component={TabNavigation} options={{ headerShown: false }} />
          <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
          {/* <Stack.Screen name='Drawerr' component={Drawerr} options={{ headerShown: false }} /> */}
          {/* <Stack.Screen name='Logout' component={Logout} options={{ headerShown: false }} /> */}
          <Stack.Screen name='About' component={About} options={{ headerShown: false }} />
          <Stack.Screen name='Contact' component={Contact} options={{ headerShown: false }} />
          <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
      </Stack.Navigator>
    </>
  )
}

export default index