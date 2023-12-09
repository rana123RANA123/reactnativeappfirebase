import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth';
// import useFishStore from '../../../store';
// import { useAuthContext } from '../contexts/AuthContext';

const Home = ({ navigation }) => {

  // const { user, addUser } = useFishStore()

  // const {isAuth} = useAuthContext()

  const [newuser, setNewUser] = useState({})
  // const [userData, setUserData] = useState({})


  // useEffect(() => {
  //   setUserData(user)
  // }, [])

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if(user){
        setNewUser(user)
        console.log("newuser", newuser)
      }
      else{
        console.log("User isn't signed in")
      }
    })
  }, [])

  return (
    <>



      <View style={styles.container}>
        <Text>Email : {newuser?.email}</Text>
        <Text>Uid : {newuser?.uid}</Text>
      </View>

      


    </>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  }
})