import React, { useState } from "react";
import { Text, View, StyleSheet, Button, ActivityIndicator } from 'react-native';


const ActivityLoderExp = () => {

    return (
        <View >
            <Button styles={styles.button}
                title="Activity indicator" />
             <ActivityIndicator />
        </View>
    );
}

export default ActivityLoderExp;

const styles = StyleSheet.create({
    contrainer: {
        flex: 1
    },
    button: {
        marginTop: 50
    }
})