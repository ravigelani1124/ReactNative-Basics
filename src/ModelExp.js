
//https://www.javatpoint.com/react-native-modal
//https://reactnative.dev/docs/modal

import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, Button, Alert, Pressable } from "react-native";

const ModelExp = () => {

    const [modelVisible, setModelVisible] = useState(false)

    return (
        <View style={styles.centeredView}>
            <Modal animationType={'slide'}
                transparent={true}
                visible={modelVisible}
                onRequestClose={() => {
                    alert('Model has been closed')
                    setModelVisible(!modelVisible)
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        
                        <Text style={styles.modalText}>Hello World</Text>
                       
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModelVisible(!modelVisible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModelVisible(true)}>

                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>
        </View>
    );
}

export default ModelExp;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    modalView: {
        margin: 20,
        height :200,
        width: 200,
        borderRadius: 20,
        backgroundColor: 'yellow',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 2
    },
    button: {
        elevation: 2,
        padding: 10,
        borderRadius: 5
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})
