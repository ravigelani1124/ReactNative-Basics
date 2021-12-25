import React from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#eaeaea"
    },
    title: {
        marginTop: 20,
        paddingVertical: 20,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 8,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    }
})

const StylesheetExp = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Stylesheet Example
            </Text>
        </View>
    );
}

export default StylesheetExp;

