import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import GymLogo from '../../../assets/image/logo.png'
import { createStackNavigator } from '@react-navigation/stack';
import Logo from '../../components/Logo'


// pass trainee profile pic as image source.
// component detailing will be done after api intrgation.
// the mockup that was shown need some navigational tuning to complete. 

const TraineeProfile = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.imageContainer} >
                <Image
                    source={GymLogo}
                    style={styles.image}
                    resizeMode='cover'
                />
            </View>
            <View style={styles.profileDetails}>
                <View style={styles.nameContainer}>
                    <Text style={styles.text} >firstName lastName</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailsText}>Email: Email Address</Text>
                    <Text style={styles.detailsText}>Adreess</Text>
                    <Text style={styles.detailsText}>DOB: Date of Birth</Text>
                    <Text style={styles.detailsText}>Age: Number </Text>
                    <Text style={styles.detailsText}>Weight: Number </Text>
                    <Text style={styles.detailsText}>Height: Number </Text>
                    <Text style={styles.detailsText}>BIM: Number </Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10
    },
    imageContainer: {
        height: 150,
        width: 150,
        borderColor: 'black',
        borderRadius: 250,
        borderWidth: 3,
        marginVertical: 30,
        overflow: 'hidden',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: "100%",
        width: "100%"
    },
    profileDetails: {

    },
    nameContainer: {

    },
    text: {
        fontSize: 30
    },
    detailsContainer: {
        padding: 15,
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    detailsText: {
        fontSize: 20,
        marginVertical: 5
    }
});

const TraineeProfileStack = createStackNavigator();

const TraineeProfileStackScreen = props => {
    return (
        <TraineeProfileStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: "#009387",
                height: 65
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
        }}
        >
            <TraineeProfileStack.Screen
                name="Profile"
                component={TraineeProfile}
                options={{
                    headerLeft: () => <Logo
                        style={{ height: 60, width: 60 }}
                        openDrawer={() => props.navigation.openDrawer()}
                    />,
                    headerLeftContainerStyle: {
                        padding: 10
                    }
                }}
            />
        </TraineeProfileStack.Navigator>
    )
}


export default TraineeProfileStackScreen;