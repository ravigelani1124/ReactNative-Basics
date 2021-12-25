import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, FlatList, StyleSheet, Button, ActivityIndicator, Image } from "react-native";
import axios from "axios";

const baseURL = "https://dummyapi.io/data/v1/user";
const appID = "61c46490b73b1ae6c46e37ff";


const ItemLayout = ({ item }) => {

    return (
        <View style={styles.item}>
            <Image
                style={styles.image}
                source={{ uri: item?.picture }}
            />
            <Text onPress={() => { getitem(item?.firstName) }} style={styles.title}>{item?.firstName}</Text>

        </View>
    )
}

const getitem = (title) => {
    alert(title)
}

const FlatListExp = () => {

    const [dataModel, setDataModel] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getUserData = async () => {
        try {
            const response = await axios({
                method: 'get',
                baseURL: 'https://dummyapi.io/data/v1/user',
                params: {
                    limit: 10
                },
                headers: { 'app-id ': '61c46490b73b1ae6c46e37ff' }
            })
            console.log("Response  :", response.data)
            setIsLoading(false)
            setDataModel(response.data?.data)
        } catch (error) {
            console.log(error)
            // setIsLoading(false)
            alert(JSON.stringify(error.message))
        }
    }

    useEffect(() => {

        getUserData();
    }, []);

    const renderItemInView = ({ item }) => (
        <ItemLayout item={item} />
    )

    return (

        <View style={styles.container}>

            <ActivityIndicator size='large' animating={isLoading} />
            <FlatList style={{ flex: 1 }} data={dataModel}
                renderItem={renderItemInView}
            />

        </View>

    );
}
0
export default FlatListExp;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 30,
    },
    item: {
        flexDirection: "row",
        backgroundColor: '#f9c2ff',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        color: 'black',
        fontSize: 32,
    },
    image: {
        width: '30%',
        height: 60,
        resizeMode: 'contain'
    }
});

