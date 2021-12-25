import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Button, ScrollView, StyleSheet } from "react-native";

const Home = () => {
    const navigation = useNavigation()
    return (
        <ScrollView styles={styles.container}>
            <Button styles={styles.button}
                title={"View And Text"}
                onPress={() => navigation.navigate('View And Text')} />

            <Button styles={styles.button}
                title={"Input Text"}
                onPress={() => navigation.navigate('Input Text')} />

            <Button styles={styles.button}
                title={"Touch Opacity"}
                onPress={() => navigation.navigate('Touch Opacity')} />

            <Button styles={styles.button}
                title={"Flex Box"}
                onPress={() => navigation.navigate('Flex Box')} />

            <Button styles={styles.button}
                title={"Date Picker"}
                onPress={() => navigation.navigate('Date Picker')} />

            <Button styles={styles.button}
                title={'Stylesheet'}
                onPress={() => navigation.navigate('Stylesheet')} />

            <Button styles={styles.button}
                title={'Image Example'}
                onPress={() => navigation.navigate('Image Example')} />

            <Button styles={styles.button}
                title={'Direction Layout'}
                onPress={() => navigation.navigate('Direction Layout')} />

            <Button styles={styles.button}
                title={'FlatList Example'}
                onPress={() => navigation.navigate('FlatList Example')} />

            <Button styles={styles.button}
                title={'Switch Example'}
                onPress={() => navigation.navigate('Switch Example')} />

            <Button styles={styles.button}
                title={'Model Example'}
                onPress={() => navigation.navigate('Model Example')} />

            <Button styles={styles.button}
                title={'ActivityLoderExp'}
                onPress={() => navigation.navigate('ActivityLoderExp')} />

            <Button styles={styles.button}
                title={'KeyboardAvoidingComponent'}
                onPress={() => navigation.navigate('KeyboardAvoidingComponent')} />

            <Button styles={styles.button}
                title={'Props'}
                onPress={() => navigation.navigate('Props', { id: 1, propName: 'hgg' })} />

            <Button styles={styles.button}
                title={'API Call Axios'}
                onPress={() => navigation.navigate('AxiosExample')} />
        </ScrollView>
    );
}

export default Home;


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 30,
    },
    button: {
        marginStart: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    }
})
