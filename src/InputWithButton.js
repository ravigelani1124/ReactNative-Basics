import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button, ScrollView,ActivityIndicator } from 'react-native';



const Input = () => {

    const [myInput, setMyInput] = useState('')
    const [names, setName] = useState(['sss','dddd'])

    const onChangeInput = (event) => {
        setMyInput(event)
    }

    const onAddUser = () => {
        const newState = [...names, myInput]
        setName(newState)
        setMyInput('')
    }

    return (<>
        <TextInput
            style={styles.input}
            value={myInput}
            onChangeText={(e) => onChangeInput(e)}
        />
        <Button title="Add User"
            onPress={onAddUser}
        />
        <View>
            <ScrollView>
                {names.map(name =><Text key={name}>{name}</Text>)}
            </ScrollView>

            <ActivityIndicator/>
        </View>
    </>);
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        backgroundColor: '#f2f2f2',
        margin: 20,
        padding: 10,
        fontSize: 24
    }
})

export default Input;