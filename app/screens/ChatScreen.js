import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from '../components/Logo';


const ChatScreen = props => {
    return (
        <View>
            <Text>Chat screen</Text>
        </View>
    )
}

const ChatStack = createStackNavigator();

const ChatScreenStack = props => {
    return (
        <ChatStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#009387",
                    height: 65
                },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
            }}
        >
            <ChatStack.Screen
                name='Notification'
                component={ChatScreen}
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
        </ChatStack.Navigator>
    )
}


styles = StyleSheet.create({

});

export default ChatScreenStack;