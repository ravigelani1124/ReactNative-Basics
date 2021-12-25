import React, { useState } from 'react';
import { Text, View, Switch, StyleSheet } from 'react-native'
import StylesheetExp from './StylesheetExp';


//https://www.javatpoint.com/react-native-switch
// for better understanding

const SwitchExp = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleChanged = () => {
        setIsEnabled(previousState => !previousState);
    }


    return (
        <View style={styles.container} >

            <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                onValueChange={toggleChanged}
                value={isEnabled} />
            <Text> {isEnabled ? 'Switch is ON' : 'Switch is OFF'}</Text>
        </View>
    );
}

export default SwitchExp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    }
})