import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Header from '../components/Header';
import Card from '../components/Card';


const HomeScreen = props => {
    return (
        <View style={styles.screen} >
            <Header />
            <View style={styles.mainContainer}>
                <Text style={styles.title}>WELCOME MUSCLE FREAK!</Text>
                <View styles={styles.cardContainer}>
                    <Card style={styles.card}>
                        <Text>
                            Get InTo Shape, Start Working Out
                    </Text>
                        <Button title="See your daily Routine" onPress={() => console.log("Worlout page re-route")} />
                    </Card>
                    <Card style={styles.card}>
                        <Text>Your Dite Chart</Text>
                        <Button title="See Daily DiteChart" onPress={() => console.log("DiteChart Page re-route")} />
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
    }
});

export default HomeScreen;