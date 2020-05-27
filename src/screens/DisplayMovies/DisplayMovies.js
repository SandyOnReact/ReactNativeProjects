import React, { Component } from "react";
import { View, TextInput, FlatList, StyleSheet, Text, Dimensions, TouchableOpacity, Image, Alert } from "react-native";
import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";
import SearchMovies from "../searchMovies/SearchMovies";

export default class DisplayMovies extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showMoviesList: []
        }
    }


    search = (searchValues) => {

        if (searchValues !== " ") {
            fetch(`https://www.omdbapi.com/?s=${searchValues}&apikey=6aba80b9`)
                .then(response => response.json())
                .then(jsonResponse => {
                    if (jsonResponse.Response === "True") {
                        this.setState({ showMoviesList: jsonResponse.Search });
                    } else {
                        Alert(jsonResponse.error);
                    }
                });
        }else{
            Alert.alert("Movie Name cannot be empty")
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <SearchMovies search={this.search} containerStyle={{ flex: 0.8 }} />
                <View style={{ flex: 1, marginTop: 10 }}>
                    <FlatList
                        data={this.state.showMoviesList}
                        keyExtractor={(item, index) => item.imdbID}
                        numColumns={2}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.flatview} key={item.id}>
                                    <TouchableOpacity style={styles.textBoxStyle} onPress={() => this.props.navigation.navigate('Details', {
                                        movie: item,
                                        index: index
                                    })}>
                                        <View style={{ flex: 8 }}>
                                            <Image style={styles.image_background} source={{ uri: item.Poster !== "N/A" ? item.Poster : 'https://www.metmuseum.org/content/img/placeholders/NoImageAvailableIcon.png' }} />
                                        </View>
                                        <View style={{ flex: 1, }}>
                                            <Text style={{ textAlign: 'center' }} numberOfLines={1} ellipsizeMode="tail">{item.Title}</Text>
                                        </View>
                                        <View style={{ flex: 1, }}>
                                            <Text style={{ textAlign: 'center' }}>Release Year : {item.Year}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                    />
                </View>
            </View>
        )
    }

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
    flatview: {
        flex: 1,
        margin: 7,
        marginLeft: 16,
    },
    textBoxStyle: {
        flex: 2,
        width: Dimensions.get('window').width / 2.3,
        height: 200,
        shadowColor: 'rgba(0,0,0, 1)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 2,
        shadowRadius: 1,
        backgroundColor: '#fff',
        elevation: 3,
    },
    image_background: {
        height: '91%',
        width: '91%',
        alignSelf: 'center',
        top: 9
    },

})