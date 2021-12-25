//What is props
//Props in component
//Props in pre-defined component

import { useRoute } from "@react-navigation/core";
import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";

const Props = () => {

    //const {id,propName} = route.prams;
    const { id, propName } = useRoute().params
    
    return (
        <View>
            <Text>Props concept + " " +{propName}</Text>
            <Button title="Click me" />
        </View>);
}

export default Props;