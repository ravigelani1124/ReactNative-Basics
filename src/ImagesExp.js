import React from "react";
import { Text, StyleSheet,Image, View } from "react-native";
import Test from './assets/test.png'


const ImageExp = ()=>{
    return(
        <View>
            <Image
                style= {styles.image}
                //source ={Test}
                source = {{uri:'https://picsum.photos/400/400'}}
                //onLoadEnd = {()=>{alert("done")}}
            />
        </View>
    );
}

export default ImageExp;


const styles = StyleSheet.create({
    image : {
        width : '100%',
        height : 300,
        resizeMode : 'contain'
    }
})