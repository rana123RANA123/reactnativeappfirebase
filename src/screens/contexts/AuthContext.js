// import { message } from 'antd'
// import auth from '@react-native-firebase/auth';
// import { View, Text } from 'react-native';
// import React, { useState, useEffect, createContext, useContext, useReducer } from 'react'

// const AuthContext = createContext()
// const initialState = { isAuth: false, user: {} }

// const reducer = (state, { type, payload }) => {
//     switch (type) {
//         case "SET_LOGGED_IN":
//             return { isAuth: true, user: payload.user }
//         case "SET_LOGGED_OUT":
//             return initialState
//         default:
//             return state
//     }
// }

// export default function AuthContextProvider({ children }) {

//     const [isAppLoading, setIsAppLoading] = useState(true)
//     const [state, dispatch] = useReducer(reducer, initialState)

//     useEffect(() => {
//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 readUserProfile(user)
//             } else {
//                 setIsAppLoading(false)
//             }
//         })
//     }, [])

//     const readUserProfile = async (user) => {
//         if (user) {
//             const userDocument = firestore().collection('Users').doc(user.uid);
//             const user = userDocument
//             dispatch({ type: "SET_LOGGED_IN", payload: { user } })
//         } else {
//             message.error("User data not found. Please try again or contact support team")
//             console.log("User data not found")
//         }
//         setIsAppLoading(false)
//     }

//     return (
//         <AuthContext.Provider value={{ isAppLoading, ...state, dispatch, readUserProfile }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export const useAuthContext = () => useContext(AuthContext)