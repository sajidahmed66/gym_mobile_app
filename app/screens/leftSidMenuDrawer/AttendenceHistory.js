import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from '../../components/Logo'

const AttendenceHistory = props => {
    return (
        <View style={styles.screen}>
            <Text>
                Attendence History
        </Text>
        </View>
    )
};

const AttendenceStack = createStackNavigator();

const AttendenceHistoryStack = props => {
    return (
        <AttendenceStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: "#009387",
                height: 65
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
        }}
        >
            <AttendenceStack.Screen
                name="Attendence"
                component={AttendenceHistory}
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
        </AttendenceStack.Navigator>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default AttendenceHistoryStack;
