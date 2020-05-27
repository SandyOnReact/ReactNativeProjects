import React, { Component, useState } from "react";
import { View, TextInput, FlatList, StyleSheet, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";
import { PropTypes } from 'react';

export default SearchMovies = (props) => {

    const [enteredText, setEnteredText] = useState(' ');

    getMoviesList = () => {
        props.search(enteredText);
    }


    return (
        <View style={[styles.container,props.containerStyle]}>
            <View style={styles.inputStyle}>
                <Input placeholder="Search Movies" inputStyle={{ color: 'black' }} onChange={(text) => setEnteredText(text)} />
                <Button title="Search" onPress={getMoviesList} />
            </View>
        </View>
    )

}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    inputStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        color: 'black'
    },

})