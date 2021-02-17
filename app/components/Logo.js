import React from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';

import GymLogo from '../../assets/image/logo.png'

const Logo = props => {
    return (
        <View style={{ ...props.style }}>
            <TouchableOpacity onPress={props.openDrawer}>
                <Image
                    style={styles.logo}
                    source={GymLogo} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        height: "100%",
        width: "100%"
    }
});

export default Logo;