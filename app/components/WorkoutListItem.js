import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';
import CheckBox from 'react-native-check-box';


const WorkOutListItem = props => {

    const [isChecked, setIsChecked] = useState(false);
    return (
        <View style={styles.listItem}>
            <Card style={{ height: 100, width: 300 }}>
                <CheckBox
                    style={styles.checkbox}
                    onClick={() => { setIsChecked(!isChecked) }}
                    isChecked={isChecked}
                    leftText={props.name}
                />
                <Text>{props.description}</Text>
            </Card>
        </View>
    )
}

styles = StyleSheet.create({
    listItem: {
        marginVertical: 5,
        alignItems: 'center',
    }
})

export default WorkOutListItem;