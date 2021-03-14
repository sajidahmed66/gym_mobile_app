import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import DiteScreen from '../screens/DiteScreen';
import WorkOutScreen from '../screens/WorkOutScreen';
import Logo from '../components/Logo'

const Stack = createStackNavigator();

const HomeStack = props => {
    // console.log("HomeStack", props)
    //#F55C19 orange

    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: "#009387",
                height: 65
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',

        }} >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerLeft: () => <Logo
                        style={{ height: 60, width: 60 }}
                        openDrawer={() => props.navigation.openDrawer()}
                    />,
                    headerLeftContainerStyle: {
                        padding: 10
                    }
                }}
            />
            <Stack.Screen
                name="WorkOutScreen"
                component={WorkOutScreen}
                options={{
                    headerLeft: () => <Logo
                        style={{ height: 60, width: 60 }}
                        openDrawer={() => props.navigation.openDrawer()}
                    />,
                    headerLeftContainerStyle: {
                        padding: 10
                    }
                }}
            />
            <Stack.Screen
                name="DiteScreen"
                component={DiteScreen}
                options={{
                    headerLeft: () => <Logo
                        style={{ height: 60, width: 60 }}
                        openDrawer={() => props.navigation.openDrawer()}
                    />,
                    headerLeftContainerStyle: {
                        padding: 10
                    }
                }} />
        </Stack.Navigator>
    )
};

export default HomeStack;