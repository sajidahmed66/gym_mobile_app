
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from '../screens/HomeScreen';
import DiteScreen from '../screens/DiteScreen';
import WorkOutScreen from '../screens/WorkOutScreen';
import Header from '../components/Header'

import TraineeProfile from '../screens/leftSidMenuDrawer/TraineeProfile';
import AttendenceHistory from '../screens/leftSidMenuDrawer/AttendenceHistory';
import PaymentHistory from '../screens/leftSidMenuDrawer/PaymentHistory';
import WorkoutHistory from '../screens/leftSidMenuDrawer/WorkoutHistory';
import YourTrainer from '../screens/leftSidMenuDrawer/YourTrainer';

const Stack = createStackNavigator();

const HomeStack = props => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerStyle: {
                        height: 80,
                        backgroundColor: 'black'
                    },
                    headerTitle: props => <Header {...props} />
                }}
            />
            <Stack.Screen
                name="WorkOutScreen"
                component={WorkOutScreen}
                options={{
                    headerStyle: {
                        height: 80,
                        backgroundColor: 'black'
                    },
                    headerTitleStyle: { color: 'white' },
                }}
            />
            <Stack.Screen
                name="DiteScreen"
                component={DiteScreen}
                options={{
                    headerStyle: {
                        height: 80,
                        backgroundColor: 'black'
                    },
                    headerTitleStyle: { color: 'white' },
                }} />
        </Stack.Navigator>
    )
}
const DrawerStack = createDrawerNavigator();

const LeftSideMenu = () => {
    return (
        <DrawerStack.Navigator initialRouteName="Home">
            <DrawerStack.Screen name="Home" component={HomeStack} />
            <DrawerStack.Screen name="Profile" component={TraineeProfile} />
            <DrawerStack.Screen name="Workout History" component={WorkoutHistory} />
            <DrawerStack.Screen name="Payment History" component={PaymentHistory} />
            <DrawerStack.Screen name="Attendence History" component={AttendenceHistory} />
            <DrawerStack.Screen name="Your Trainer" component={YourTrainer} />
        </DrawerStack.Navigator>
    )
};
const AppNavigation = props => {
    return (
        <LeftSideMenu />
    )
};



export default AppNavigation; 