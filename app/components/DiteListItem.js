import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import Card from './Card';

const DitelistItem = props => {
    return (
        <Card style={styles.card}>
            <Text >Item Name: {props.data.name}</Text>
            <Text >Total Quantity : {props.data.quantity} {props.data.unit}</Text>
            <Text >Dite Time : Lunch/Dinner</Text>
            <Text >Total Calorie {props.data.calorie}</Text>
        </Card>
    )
};

const styles = StyleSheet.create({
    card: {
        height: 150,
        width: 300,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 5
    },

})

export default DitelistItem;