import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';
import GymLogo from '../../assets/image/logo.png';
import { connect } from 'react-redux';
import { tryLogIn } from '../redux/userLogIn/loginActionCreator';

const mapStateToProps = state => {
    return {
        isLogedIn: state.isLogedIn
    }
}


const mapDispatchToprops = dispatch => {
    return {
        tryLogIn: (data) => dispatch(tryLogIn(data))
    }
}


const LogIn = props => {
    const [authSate, setAuthState] = useState({
        isAuth: false,
        inputs: {
            phone: "",
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

    //authentication 
    const handleAuth = () => {
        const phone = authSate.inputs.phone;
        const password = authSate.inputs.password;
        if (phone !== "" && password !== "") {
            props.tryLogIn(authSate.inputs)
            console.log("logInScrn", props.isLogedIn)
        } else {
            alert("Input all Fields")
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.screen}>
                <View style={styles.imageconatiner}>
                    <Image style={styles.image} source={GymLogo} />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Log In</Text>
                    <TextInput
                        style={styles.inputView}
                        placeholder={"Enter User Phone Number"}
                        value={authSate.inputs.phone}
                        onChangeText={value => updateInputs(value, "phone")}
                        keyboardType="numeric"
                        maxLength={11}
                    />
                    <TextInput
                        style={styles.inputView}
                        placeholder={"Enter User Password "}
                        secureTextEntry={true}
                        value={authSate.inputs.password}
                        onChangeText={value => updateInputs(value, "password")}
                    />
                    <TouchableOpacity onPress={() => { handleAuth() }}>
                        <View style={styles.logInBtnContainer} >
                            <Text style={styles.logInBtn}>Log In</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
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
        color: 'white',
        fontSize: 26,

    },
    imageconatiner: {
        height: 250,
        width: 250,
        marginTop: 10
    },
    image: {
        height: "100%",
        width: "100%"
    },
    inputContainer: {
        width: 300,
        alignItems: 'center',
        justifyContent: 'center'
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
    logInBtnContainer: {
        width: 150,
        backgroundColor: "red",
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 40,
        borderRadius: 20
    },
    logInBtn: {
        color: 'black',
        padding: 8,
        fontSize: 20,
    }
});

export default connect(mapStateToProps, mapDispatchToprops)(LogIn);