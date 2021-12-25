import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ViewExp = () => {
    return (
        <View>
            <Text>Hey I am Text and View</Text>
        </View>
    )
}

export default ViewExp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "pink"
    }
})
