import React from "react";
import { View, Text, Button as ButtonComp, Dimensions,StyleSheet } from "react-native";

export const Button = (props) => {
    const {containerStyle,title="Button",onPress,color} = props;
    return (
        <View style={[styles.containerStyle, containerStyle]}>
            <ButtonComp
                title={title}
                onPress={onPress}
                color={color}
             />
        </View>
    )

}

const styles = StyleSheet.create({
    containerStyle: {
        width: "80%",
    }
})