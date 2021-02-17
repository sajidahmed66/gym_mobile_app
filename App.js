import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './app/routes/AppNavigation';



export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.statusBar}>
      </View>
      <AppNavigation />
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