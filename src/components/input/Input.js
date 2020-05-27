import React from "react";
import { View, Text, Button, Dimensions, TextInput,StyleSheet } from "react-native";

export const Input = (props) => {

   const { onChange,value,inputStyle,inputContainer,title,secure=false,selectionColor,placeholder } =  props;

    return (
        <View style={[styles.inputContainer, inputContainer]}>
            <Text style={styles.titleStyle}>{title}</Text>
            <TextInput
                style={[styles.inputStyle,inputStyle]}
                onChangeText={onChange}
                placeholder = {placeholder}
                value={value}
                secureTextEntry={secure}
                selectionColor={selectionColor}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    inputContainer: {
        width: "80%",
        marginBottom:10,     
    },
    inputStyle:{
        height:40,
        borderWidth:1,
        color:'white',
        borderColor:"black",
        borderRadius:6,
        fontSize:15,
        padding:5
    },
    titleStyle:{
        margin:10,
        fontSize:16,
        fontWeight:'500',
        lineHeight:21,
        color:'white'    
    }
})