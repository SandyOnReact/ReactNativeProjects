import React, { Component } from "react";
import { View, TextInput, FlatList, StyleSheet, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Card } from "react-native-elements";

export default class MovieDetails extends Component {



    render() {
        const { movie, index } = this.props.route.params;

        return (
            <View style={styles.container}>
                <ScrollView style={{ flex: 1 }}>
                    <Image source={{ uri: movie.Poster }} style={{ width: Dimensions.width, height: 350 }} />
                    <Card containerStyle={{ width: "90%", height: 150, borderRadius: 12, backgroundColor: 'lightgrey' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }} ellipsizeMode="tail" numberOfLines={1}>{movie.Title}</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }}> {movie.Year}</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }}>Type : {movie.Type}</Text>

                        </View>

                    </Card>
                </ScrollView>
            </View>
        )

    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})