import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
;


import Card from '../components/Card';



const HomeScreen = props => {
    return (
        <View style={styles.screen} >
            <View style={styles.mainContainer}>
                <Text style={styles.title}>WELCOME MUSCLE FREAK!</Text>
                <View styles={styles.cardContainer}>
                    <Card style={styles.card}>
                        <Text>
                            Get InTo Shape, Start Working Out
                        </Text>
                        <Button title="See your daily Routine" style={styles.btn_style} onPress={() => props.navigation.navigate('WorkOutScreen', { name: "My workout" })} />
                    </Card>
                    <Card style={styles.card}>
                        <Text>Your Dite Chart</Text>
                        <Button title="See Daily DiteChart" onPress={() => props.navigation.navigate('DiteScreen')} />
                    </Card>
                </View>
            </View>
        </View >
    )
};



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    card: {
        width: 300,
        maxWidth: "80%"
    },
    mainContainer: {
        flex: 1,
        flexDirection: "column",

    },
    title: {
        padding: 15,
        fontSize: 22,
        fontWeight: "bold"
    },
    cardContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 10,

    },
    card: {
        height: 180,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
        marginVertical: 10
    }, btn_style: {
        alignItems: 'center'
    }
});

export default HomeScreen;