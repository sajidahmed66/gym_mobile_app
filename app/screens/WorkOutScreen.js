import React, { useState } from 'react'
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

import WorkOutListItem from '../components/WorkoutListItem';

const WorkOutScreen = props => {
    const [workoutList, setWorkoutList] = useState(
        [
            {
                name: "Plank",
                description: "basic plank for 30 sec",
                entryBy: { firstname: "X", lastname: "Y" },
                date: "2021-02-27"
            },
            {
                name: "Plank",
                description: "basic plank for 30 sec",
                entryBy: { firstname: "X", lastname: "Y" },
                date: "2021-02-27"
            },
            {
                name: "Plank",
                description: "basic plank for 30 sec",
                entryBy: { firstname: "X", lastname: "Y" },
                date: "2021-02-27"
            },
            {
                name: "Plank",
                description: "basic plank for 30 sec",
                entryBy: { firstname: "X", lastname: "Y" },
                date: "2021-02-27"
            },
            {
                name: "Plank",
                description: "basic plank for 30 sec",
                entryBy: { firstname: "X", lastname: "Y" },
                date: "2021-02-27"
            },
            {
                name: "Plank",
                description: "basic plank for 30 sec",
                entryBy: { firstname: "X", lastname: "Y" },
                date: "2021-02-27"
            }

        ]
    );
    return (
        <View style={styles.viewContainer}>
            <FlatList
                style={styles.flatlist}
                data={workoutList}
                renderItem={(info) => {
                    return (
                        <WorkOutListItem
                            name={info.item.name}
                            description={info.item.description}
                        />
                    )
                }}
            />
            {/* <Button title="button" onPress={() => console.log("pressed")} /> */}
        </View>
    )
};

const styles = StyleSheet.create({
    flatlist: {
    },
    viewContainer: {
        flex: 1,
    }
});

export default WorkOutScreen;
