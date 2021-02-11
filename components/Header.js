// component that displays header strip at home screen.

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import GymLogo from '../assets/image/logo.png'

const Header = props => {
    return (
        <View style={styles.heder}>
            {/* <Text style={styles.headerText}> Header</Text> */}
            <TouchableOpacity onPress={() => { console.log("working") }}>
                <Image
                    style={styles.logo}
                    source={GymLogo} />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    heder: {
        width: "100%",
        height: 80,
        marginTop: Constants.statusBarHeight,
        backgroundColor: 'black',
        flexDirection: 'row',
        padding: 15
    },
    headerText: {
        color: "#b8000c"
    },
    logo: {
        width: 60,
        height: 60,

    }
});

export default Header;