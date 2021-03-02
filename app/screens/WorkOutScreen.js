import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';

const WorkOutScreen = props => {
    const [workoutList, setWorkoutList] = useState({ name: "Plank", description: "basic plank for 30 sec", entryBy: { firstname: "X", lastname: "Y" }, date: "2021-02-27" })
    return (
        <View>
            <Card style={{ height: 150, width: 300 }}>
                <Text> {workoutList.name} </Text>
                <Text>{workoutList.description}</Text>
                <Text>{workoutList.entryBy.firstname}</Text>
                <Text>{workoutList.entryBy.lastname}</Text>
                <Text> Date: {workoutList.date}</Text>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default WorkOutScreen;
