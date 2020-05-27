/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  ImageBackground,
  Text,
  StatusBar,
} from 'react-native';
import LoginScreen from "./src/screens/Login/LoginScreen";
import SearchMovies from './src/screens/searchMovies/SearchMovies';
import MovieDetails from './src/screens/movie/MovieDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DisplayMovies from './src/screens/DisplayMovies/DisplayMovies';


export default class App extends React.Component {
  render() {

    const Stack = createStackNavigator();
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Display" component={DisplayMovies} />
            <Stack.Screen name="Details" component={MovieDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    )

  }

};

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },


});
