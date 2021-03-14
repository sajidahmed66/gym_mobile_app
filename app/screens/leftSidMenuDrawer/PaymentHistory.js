import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from '../../components/Logo'


const PaymentHistory = props => {
    return (
        <View style={styles.screen}>
            <Text>
                PaymentHistory
        </Text>
        </View>
    )
};


const PaymentStack = createStackNavigator();

const PaymentHistoryStack = props => {
    return (
        <PaymentStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: "#009387",
                height: 65
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
        }}
        >
            <PaymentStack.Screen
                name="Payments"
                component={PaymentHistory}
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
        </PaymentStack.Navigator>
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

export default PaymentHistoryStack;
