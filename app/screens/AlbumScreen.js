import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from '../components/Logo';



const AlbumScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Album screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


const AlbumStack = createStackNavigator();

const AlbumStackScreen = props => {
    return (
        <AlbumStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#009387",
                    height: 65
                },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
            }}
        >
            <AlbumStack.Screen
                name="Album"
                component={AlbumScreen}
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
        </AlbumStack.Navigator>
    )
}


export default AlbumStackScreen;