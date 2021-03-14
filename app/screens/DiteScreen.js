import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native';
import DitelistItem from '../components/DiteListItem';

const DiteScreen = props => {
    const [dite, setDite] = useState([
        {
            name: "Rice",
            quantity: 1,
            unit: "cup",
            calorie: 100,
            entryBy: "XXYY",
            date: "20-01-2021"
        },
        {
            name: "Rice",
            quantity: 1,
            unit: "cup",
            calorie: 100,
            entryBy: "XXYY",
            date: "20-01-2021"
        },
    ])
    // scrollView will be added later. after Complete idea of api is given. 
    // warning will show To  assign unique key to each item , that will be the default id value.
    return (
        <View style={styles.screen}>
            <Text style={styles.headerText}>
                Your Dite Chart
            </Text>
            {/* <Text style={styles.dateText}>{dite.date}</Text> */}
            <View style={styles.listView}>
                <FlatList
                    style={styles.flatlist}
                    data={dite}
                    renderItem={(info) => {
                        return (
                            <DitelistItem
                                data={info.item}
                            />
                        )
                    }}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 24,
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 5
    },
    dateText: {
        marginVertical: 5
    },
    flatlist: {

    },
    listView: {

    },

});

export default DiteScreen;
