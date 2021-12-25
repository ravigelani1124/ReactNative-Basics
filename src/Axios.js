// What is Axios?
// Axios is a promise-based HTTP Client for node.js and the browser. 
// It is isomorphic (= it can run in the browser and nodejs with the same codebase).
// On the server-side it uses the native node.js http module, 
// while on the client (browser) it uses XMLHttpRequests.


import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Button } from 'react-native';
import axios from "axios";

const AxiosExample = () => {

    const getDataUsingSimpleAPICall = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response) => {

            alert(JSON.stringify(response.data))
        }).catch((errors) => {
            alert(JSON.stringify(errors.message))
        })
    }

    const getDataUsingAsyncAwaitGetCall = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
            alert(JSON.stringify(response.data))
        } catch (error) {
            alert(JSON.stringify(error.message))
        }
    }

    const getDataUsingSimpleAPIPostCall = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }).then((response) => {
            alert(JSON.stringify(response.data))
        }).catch((error) => {
            alert(JSON.stringify(error.message))
        })
    }

    const getDataUsingAsynAwaitPostCall = async () => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                title: 'foo',
                body: 'bar',
                userId: 1
            })
            alert(JSON.stringify(response.data))
        } catch (error) {
            alert(JSON.stringify(error.message))
        }
    }

    return (
        <View>
            <Button title='Simple GET call'
                onPress={getDataUsingSimpleAPICall} />

            <Button title='GET call using Async and await'
                onPress={getDataUsingAsyncAwaitGetCall} />

            <Button title='Simple Post call'
                onPress={getDataUsingSimpleAPIPostCall} />

            <Button title='Post call using Async Await'
                onPress={getDataUsingAsynAwaitPostCall} />
        </View>
    )
}

export default AxiosExample;