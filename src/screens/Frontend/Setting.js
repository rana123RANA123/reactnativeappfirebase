import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import Logout from './Logout'
import { createDrawerNavigator } from '@react-navigation/drawer'; import ViewOther from './ViewOther';

const Drawer = createDrawerNavigator();

const Setting = () => {

    return (
        <>
            <Drawer.Navigator initialRouteName="Setting">
                <Drawer.Screen name="Setting" component={Setting} />
                <Drawer.Screen name="Logout" component={Logout} />
            </Drawer.Navigator>
        </>
    )
}

export default Setting