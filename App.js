import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './app/routes/AppNavigation';
import LogIn from './app/screens/LoginScreen';



export default function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);


  return (
    <NavigationContainer>
      <View style={styles.statusBar}>
      </View>
      {isLogedIn ? <AppNavigation /> : <LogIn changeAuth={setIsLogedIn} />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    marginTop: Constants.statusBarHeight,
  }
});


// create component like this 
// <StoreProvider><PaperProvider><NavigationContainer><Main>