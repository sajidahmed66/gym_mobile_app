import React, { useState } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import GymLogo from '../../assets/image/logo.png';

const LogIn = props => {
    const [authSate, setAuthState] = useState({
        isAuth: false,
        inputs: {
            email: "",
            password: "",
        }
    });

    const updateInputs = (value, name) => {
        setAuthState({
            ...authSate,
            inputs: {
                ...authSate.inputs,
                [name]: value
            }
        })
    };

    const handleAuth = () => {
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        const email = authSate.inputs.email;
        const password = authSate.inputs.password;
        if (email !== "" && password !== "") {
            if (re.test(email)) {
                props.changeAuth(true)
            } else {
                alert("Invalid Email")
            }
        } else {
            alert("Input all Fields")
        }
    }

    return (
        <View style={styles.screen}>
            <View style={styles.imageconatiner}>
                <Image style={styles.image} source={GymLogo} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>LogIn</Text>
                <TextInput
                    style={styles.inputView}
                    placeholder={"Enter User Email "}
                    value={authSate.inputs.email}
                    onChangeText={value => updateInputs(value, "email")}
                />
                <TextInput
                    style={styles.inputView}
                    placeholder={"Enter User Password "}
                    value={authSate.inputs.password}
                    onChangeText={value => updateInputs(value, "password")}
                />
                <TouchableOpacity onPress={() => { handleAuth() }}>
                    <Text style={styles.logInBtn} >Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',

    },
    text: {
        color: 'white'
    },
    imageconatiner: {

    },
    image: {
        height: 300,
        width: 300
    },
    inputContainer: {
        width: 300,
    },
    inputView: {
        borderColor: "black",
        backgroundColor: "white",
        color: "black",
        borderWidth: 1,
        width: "85%",
        padding: 10,
        marginVertical: 5,
    },
    logInBtn: {
        width: '85%',
        backgroundColor: "red",
        color: 'black',
        padding: 8,
        fontSize: 20
    }
});

export default LogIn;