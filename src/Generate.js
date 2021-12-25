import React from "react";
import { Text, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    generate: {
        backgroundColor: '#00BCD4',
        alignItems: "center",
        padding: 10,
        width: '100%'
    },
});

const Generate = (props) => {
    return (
        <View>
        <TouchableOpacity
            onPress={() => {
                alert('Button pressed')
            }}
            underlayColor="blue">
            <View style={styles.generate}>
                Text style={{ color: '#fff' }}<Text>Add Number</Text>
            </View>
        </TouchableOpacity>
        </View>);
}

export default Generate;