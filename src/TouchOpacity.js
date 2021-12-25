import React, { useState } from "react";
import { Text, Button, View, StyleSheet, TouchableOpacity } from "react-native";
import StylesheetExp from "./StylesheetExp";


const TouchOpacityExp = () => {
    const [count, setCount] = useState(0)
    const onPress = () => {
        setCount(precount => (precount + 1))
    }
    return (
        <View style={styles.container}>
            <View style={styles.countContainer}>
                <Text>Count : {count}</Text>
            </View>
            <TouchOpacity style={styles.button}
                onPress={onPress}>
                <Text>Press Here</Text>
            </TouchOpacity>
        </View>
    );
}

export default TouchOpacityExp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    }
}
)