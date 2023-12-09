import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import Home from './Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ViewOther from './ViewOther';
// import Drawerr from './Drawerr';
import Logout from './Logout';
import Setting from './Setting';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {

    return (
        <>
            <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Logout" component={Logout} />
                {/* <Tab.Screen name="Setting" component={Setting} /> */}
                {/* <Tab.Screen name="Setting" component={Setting} /> */}
            </Tab.Navigator>
        </>
    )
}

export default TabNavigation