import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabNav from './BottomTabNav';
import DrawerContent from './DrawerContent';

import TraineeProfileStackScreen from '../screens/leftSidMenuDrawer/TraineeProfile';
import AttendenceHistoryStack from '../screens/leftSidMenuDrawer/AttendenceHistory';
import PaymentHistoryStack from '../screens/leftSidMenuDrawer/PaymentHistory';
import WorkoutHistoryStack from '../screens/leftSidMenuDrawer/WorkoutHistory';
import ReviewUsStackScreen from '../screens/leftSidMenuDrawer/ReviewUsScreen';

const DrawerStack = createDrawerNavigator();

const LeftSideMenu = () => {
    return (
        <DrawerStack.Navigator
            drawerContent={props => <DrawerContent {...props} />}
        >
            <DrawerStack.Screen name="HomeDrawer" component={BottomTabNav} />
            <DrawerStack.Screen name="Profile" component={TraineeProfileStackScreen} />
            <DrawerStack.Screen name="Workout History" component={WorkoutHistoryStack} />
            <DrawerStack.Screen name="Payment History" component={PaymentHistoryStack} />
            <DrawerStack.Screen name="Attendence History" component={AttendenceHistoryStack} />
            <DrawerStack.Screen name="Review Us" component={ReviewUsStackScreen} />
        </DrawerStack.Navigator>
    )
};


const AppNavigation = props => {
    return (
        <LeftSideMenu />
    )
};



export default AppNavigation;